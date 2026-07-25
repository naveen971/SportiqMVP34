import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../core/auth/AuthProvider';
import { updateAvatarUrl } from '../../services/profileService';
import { ROUTES } from '../../../../routing/routes';
import styles from './ProfilePictureUploadScreen.module.css';

interface LocationState {
  returnTo?: string;
}

export function ProfilePictureUploadScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Read returnTo from state, default to Personal Information
  const state = location.state as LocationState | null;
  const returnTo = state?.returnTo || ROUTES.PERSONAL_INFORMATION;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file) return;

      // Basic client-side validation
      if (file.size > 5 * 1024 * 1024) {
        setError('File must be smaller than 5MB');
        return;
      }
      setSelectedFile(file);
      setError(null);
      
      // Create preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleTriggerFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleSkip = () => {
    navigate(returnTo);
  };

  const handleNext = async () => {
    if (!selectedFile || !user) {
      handleSkip();
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await updateAvatarUrl(user.id, selectedFile);
      navigate(returnTo);
    } catch (err: any) {
      console.error('Error uploading avatar:', err);
      // Graceful error handling, specifically expecting bucket issues since it's not created yet.
      setError(err.message || 'Failed to upload photo. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cleanup object URL
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className={`h-full bg-background text-on-background flex flex-col items-center justify-center p-4 ${styles.container}`}>
      {/* Main Container */}
      <main className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.04)] border border-surface-container-highest flex flex-col overflow-hidden relative min-h-[600px]">
        {/* Header (Back) */}
        <header className="w-full p-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span className="material-symbols-outlined" data-icon="arrow_back" aria-hidden="true">
              arrow_back
            </span>
          </button>
          
          <div className="flex-1 px-4">
            {/* Progress indicator removed per design intent for reusable screen */}
          </div>
          
          {/* Invisible spacer to balance the back button */}
          <div className="w-10"></div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-container-margin pb-xl">
          {/* Titles */}
          <div className="text-center mb-lg w-full">
            <h1 className="font-headline-xl text-headline-xl text-on-background mb-sm">
              Add a Profile Photo
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant px-md">
              Help teammates and coaches recognize you. Choose a professional headshot or a clear action photo.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-error-container text-on-error-container rounded-lg font-body-md text-center w-full max-w-xs">
              {error}
            </div>
          )}

          {/* Avatar Upload Area */}
          <div 
            className="relative mb-lg group cursor-pointer"
            onClick={handleTriggerFilePicker}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleTriggerFilePicker();
              }
            }}
            aria-label="Select profile photo"
          >
            {/* Avatar Placeholder/Preview */}
            <div className="w-48 h-48 rounded-full bg-surface-container-highest border-4 border-surface-container-lowest shadow-md flex items-center justify-center overflow-hidden relative z-10 transition-transform group-hover:scale-[1.02]">
              {previewUrl ? (
                <img src={previewUrl} alt="Profile Preview" className="w-full h-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-[80px] text-tertiary-container" data-icon="person" aria-hidden="true">
                  person
                </span>
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-on-tertiary" data-icon="add_a_photo" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                  add_a_photo
                </span>
              </div>
            </div>

            {/* Decorative Background Ring */}
            <div className={`absolute top-1/2 left-1/2 w-56 h-56 rounded-full border-2 border-dashed border-primary-container/30 z-0 ${styles.avatarRing}`}></div>
          </div>

          {/* Hidden File Input */}
          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/jpeg, image/png, image/gif"
            className="hidden"
            aria-hidden="true"
          />

          {/* Upload Action */}
          <button
            type="button"
            onClick={handleTriggerFilePicker}
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-title-md text-title-md py-3 px-8 rounded-lg shadow-sm transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined" data-icon="upload_file" aria-hidden="true">
              upload_file
            </span>
            {previewUrl ? 'Change Photo' : 'Upload Photo'}
          </button>
          
          <p className="font-label-md text-label-md text-on-surface-variant mt-sm">
            JPG, PNG or GIF (Max 5MB)
          </p>
        </div>

        {/* Footer Actions */}
        <footer className="w-full p-container-margin border-t border-surface-container-highest bg-surface-container-lowest mt-auto flex justify-between items-center">
          <button
            type="button"
            onClick={handleSkip}
            disabled={isSubmitting}
            className="px-6 py-3 rounded-lg font-title-md text-title-md text-on-surface-variant hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            Skip
          </button>
          
          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedFile || isSubmitting}
            className={`px-6 py-3 rounded-lg font-title-md text-title-md flex items-center gap-2 transition-all ${
              selectedFile && !isSubmitting
                ? 'bg-primary text-on-primary hover:bg-primary/90 active:scale-95' 
                : 'bg-surface-container-highest text-on-surface-variant cursor-not-allowed opacity-50'
            }`}
          >
            {isSubmitting ? 'Saving...' : 'Next'}
            {!isSubmitting && (
              <span className="material-symbols-outlined" data-icon="arrow_forward" aria-hidden="true">
                arrow_forward
              </span>
            )}
          </button>
        </footer>
      </main>
    </div>
  );
}
