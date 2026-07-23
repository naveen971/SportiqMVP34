$components = "Button", "Card", "Input", "Typography", "Avatar", "Dialog", "Loading", "EmptyState", "ComingSoon", "Badge", "Tag"
foreach ($c in $components) {
    New-Item -Path "src/shared/components/$c" -ItemType Directory -Force | Out-Null
    New-Item -Path "src/shared/components/$c/index.ts" -ItemType File -Value "export type { ${c}Props } from './types';`n" -Force | Out-Null
    New-Item -Path "src/shared/components/$c/types.ts" -ItemType File -Value "export interface ${c}Props {}`n" -Force | Out-Null
}

$layouts = "AppLayout", "AuthLayout"
foreach ($l in $layouts) {
    New-Item -Path "src/shared/layouts/$l" -ItemType Directory -Force | Out-Null
    New-Item -Path "src/shared/layouts/$l/index.ts" -ItemType File -Value "export type { ${l}Props } from './types';`n" -Force | Out-Null
    New-Item -Path "src/shared/layouts/$l/types.ts" -ItemType File -Value "export interface ${l}Props {}`n" -Force | Out-Null
}

$navs = "BottomNav", "Sidebar"
foreach ($n in $navs) {
    New-Item -Path "src/shared/navigation/$n" -ItemType Directory -Force | Out-Null
    New-Item -Path "src/shared/navigation/$n/index.ts" -ItemType File -Value "export type { ${n}Props } from './types';`n" -Force | Out-Null
    New-Item -Path "src/shared/navigation/$n/types.ts" -ItemType File -Value "export interface ${n}Props {}`n" -Force | Out-Null
}

New-Item -Path "src/shared/hooks" -ItemType Directory -Force | Out-Null
New-Item -Path "src/shared/models" -ItemType Directory -Force | Out-Null
New-Item -Path "src/shared/services" -ItemType Directory -Force | Out-Null
New-Item -Path "src/shared/widgets" -ItemType Directory -Force | Out-Null
New-Item -Path "src/shared/hooks/.gitkeep" -ItemType File -Force | Out-Null
New-Item -Path "src/shared/models/.gitkeep" -ItemType File -Force | Out-Null
New-Item -Path "src/shared/services/.gitkeep" -ItemType File -Force | Out-Null
New-Item -Path "src/shared/widgets/.gitkeep" -ItemType File -Force | Out-Null

$modules = "authentication", "profile", "social", "search", "messaging", "notifications", "settings"
foreach ($m in $modules) {
    New-Item -Path "src/modules/$m" -ItemType Directory -Force | Out-Null
    $subdirs = "components", "screens", "services", "hooks", "utils"
    foreach ($sub in $subdirs) {
        New-Item -Path "src/modules/$m/$sub" -ItemType Directory -Force | Out-Null
        New-Item -Path "src/modules/$m/$sub/.gitkeep" -ItemType File -Force | Out-Null
    }
    New-Item -Path "src/modules/$m/types" -ItemType Directory -Force | Out-Null
    New-Item -Path "src/modules/$m/types/index.ts" -ItemType File -Value "export {}`n" -Force | Out-Null
    New-Item -Path "src/modules/$m/constants" -ItemType Directory -Force | Out-Null
    New-Item -Path "src/modules/$m/constants/index.ts" -ItemType File -Value "export {}`n" -Force | Out-Null
    $moduleName = (Get-Culture).TextInfo.ToTitleCase($m)
    New-Item -Path "src/modules/$m/README.md" -ItemType File -Value "# $moduleName Module`n`nPurpose of this module.`n" -Force | Out-Null
}
