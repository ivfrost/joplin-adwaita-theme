<h3 align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Adwaita_logo.svg/2048px-Adwaita_logo.svg.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Adwaita Theme for <a href="https://joplinapp.org/">Joplin</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

## Preview
<p align="center">
  <img src="https://raw.githubusercontent.com/ivfrost/joplin-adwaita-theme/refs/heads/main/img/preview.png" alt="Preview Image"/>
</p>

## Installation
1. Download the latest release.
2. Extract the files and move `userchrome.css` and `userstyle.css` to the Joplin configuration directory:
   - **Linux/macOS:** `~/.config/joplin-desktop/`
   - **Windows:** `C:\Users\%USERNAME%\.config\joplin-desktop/`
3. Enable the dark theme from the Appearance settings.
4. (Optional but recommended) Install the following plugins:
   - [CodePerfect](https://joplinapp.org/plugins/plugin/jl15988.JoplinCodePerfectPlugin/) (Required for showing code lines)
   - [Outline](https://joplinapp.org/plugins/plugin/outline/)
   - [Better Code Blocks](https://joplinapp.org/plugins/plugin/com.ckant.joplin-plugin-better-code-blocks/)
   - [Github Alerts](https://joplinapp.org/plugins/plugin/com.github.alan-null.joplin-plugin-github-alerts/) 

## Notes
- For development purposes, it's convenient creating hard links for the compiled stylesheets in the joplin config folder. From the root of the repository, run:
	- `ln ./src/userchrome.css ~/.config/joplin-desktop/`
	- `ln ./src/userstyle.css ~/.config/joplin-desktop/`
- (Fedora) If the emojis appear to not be rendering properly, you can try running this command  to install missing dependencies: `sudo dnf group install -y input-methods`
	-  Source: [Joplin's Github Repository - Issues](https://github.com/laurent22/joplin/issues/10683)

## Resources
- [GNOME Human Interface Guidelines](https://developer.gnome.org/hig/index.html)
- [Icon Library](https://flathub.org/apps/org.gnome.design.IconLibrary)

## Credits
- [popcar](https://github.com/catppuccin/joplin) for the Catppuccin theme, which served as a base for creating this one.
- [stysebae](https://github.com/stysebae/joplin-vsc-material-theme) for the initial vsc-type themes on which the Catppuccin theme is based.
