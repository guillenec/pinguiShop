## 🤓🛠 Procedimiento instalcion fnm:
![img nfm 🐈‍⬛🐈‍](https://repository-images.githubusercontent.com/166045424/8289ae80-d301-11e9-9417-c43aeaee86a2)

fnm: Fast Node Manager nos permite ""administrar las versiones de node en un proyecto o en nuestro sistema"" de esta forma ahorramos tiempo al poder instalar y cambiar entre versiones.
fnm es multiplataforma, funciona en Linux, Windows y Mac Os entre otros, ademas esta escrito en RUST y es muchomas rapido que nvm.

[repositorio 🐈‍⬛🐈‍⬛ github fnm](https://github.com/Schniz/fnm)

### 🛸🛸 instalacion usando script ( macOS/Linux❤️❤️ )
	╭─guille at pescado in ~
	╰─○ curl -fsSL https://fnm.vercel.app/install | bash -s -- --install-dir "./.fnm" --skip-shell
	

*--install-dir: crea un directorio para instalar fnm (por defecto $HOME/.fnm).*--skip-shell: Omita agregar el cargador de shell al archivo de config, según el shell definido en $SHELL. por ejemplo, para Bash, $HOME/.bashrc.  
*--force-install: fuerza el install.	

Nota: Para eliminar fnm, basta con eliminar el directorio $HOME/.fnm

### 🛸🛸 configuracion del shell
antes de usar fnm tenemos que configurar la variable de entorno.
evaluar comando fnm env.
para ello podemos hacer lo siguiente: editamos el archivo zshrc y añadimos:
	╭─guille at pescado in ~
	╰─○ vim .zshrc
	export PATH=/home/$USER/.fnm:$PATH
	eval "$(fnm env --use-on-cd --version-file-strategy=recursive)"

### instalacion del script de finalizacion.
este script permite autocompletar el comando parcial fnm.. por ej al escribir ""fnm -ls<TAB>"" == ""fnm-ls-remote"" 
	╭─guille at pescado in ~
	╰─○ fnm completions --shell zsh

#### creamos el archivo .node-version
Creamos y añadimos la version de nuestro equipo. 
        ╭─guille at pescado in ~
        ╰─○ node --version > .node-version
        ╭─guille at pescado in ~
        ╰─○ eval "$(fnm env --use-on-cd)"
        
#### Lista de versiones de node disponibles para imstalar
	╭─guille at pescado in ~
        ╰─○ fnm ls-remote

#### instalacion de una version de node:
puedo instalar tantas versiones como desee. 
        Version x
	╭─guille at pescado in ~
        ╰─○ fnm install v18.3.0
        
	Version estable
	╭─guille at pescado in ~
        ╰─○ fnm install --lts

	╭─guille at pescado in ~
	╰─○ fnm alias v16.19.0 node-16-LTS-default

	╭─guille at pescado in ~
	╰─○ fnm list              
	* v16.19.0 default, node-16-LTS-default
	* v18.3.0
	* v18.13.0 lts-latest node-18-LTS-secundaria
	* v19.4.0
	* system

	╭─guille at pescado in ~
	╰─○ fnm unalias lts-latest
 
	╭─guille at pescado in ~
	╰─○ fnm list
	* v16.19.0 default, node-16-LTS-default
	* v18.3.0
	* v18.13.0 node-18-LTS-secundaria
	* v19.4.0
	* system

#### usar una version especifica, instalada.
	╭─guille at pescado in ~
        ╰─○ fnm use 16

Luego: verificamos
	╭─guille at pescado in ~
	╰─○ fnm current
	v16.19.0
	
	╭─guille at pescado in ~
	╰─○ fnm ls     
	* ""v16.19.0 default, node-16-LTS-default""
	* v18.3.0
	* v18.13.0 node-18-LTS-secundaria
	* v19.4.0
	* system

Nota: 
	Tambien podemos usar el node instalado en el sistema:
	╭─guille at pescado in ~
        ╰─○ fnm use system


