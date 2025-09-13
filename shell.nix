{ pkgs? import <nixpkgs> {} }:
let
    backend = with pkgs; [ 
        nest-cli

        prisma
        prisma-engines
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
}
