{ pkgs? import <nixpkgs> {} }:
let
    backend = with pkgs; [ 
        nest-cli
    ];

    frontend = with pkgs; [
        tailwindcss_4
        vite
    ];
in 
pkgs.mkShell {
    packages = with pkgs; [
        nodejs_20
    ] ++ backend ++ frontend;


    shellHook = ''
        if [ ! -d "node_modules" ]; then
            echo "Installing npm dependencies..."
            npm install
        fi
    '';
}
