function makeHeader(menu, enterPointHeader, styleLink, logo) {
    this.data = {
      menuItems: menu,
      enterPoint: enterPointHeader,
      logo,
      styleLink
    };
    this.listItems = [];
    this.template = '';
    this.methods = {
      createItems: () => {
        this.data.menuItems.forEach(element => {
          this.listItems.push(`<li><a href="#">${element}</a></li>`);
        })
      },
      compoundForm: () => {
        this.template = `
        <div class="container">
          <div class="logo">
            <img src="${this.data.logo}" alt="" width="75">
          </div>
          <menu>
            <ul>
            ${this.listItems.join('')}
            </ul>
          </menu>
        </div>
        `;
      }
    };
    this.render = () => {
      this.methods.createItems();
      this.methods.compoundForm();
      this.data.enterPoint.innerHTML = this.template;
      document.getElementsByTagName('head')[0].innerHTML = `<link rel="stylesheet" href="${this.data.styleLink}">`;
      console.log(this.data.styleLink)
    } 
    render()
  }


  makeHeader(menu, enterPointHeader, styleLink, logo);