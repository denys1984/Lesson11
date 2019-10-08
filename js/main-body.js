function makeBody(info, point, caption) {
    this.data = {
        info,
        point,
        caption
    }
    this.template = '';
    this.lines = [];
    this.caption = '';

    this.methods = {
        createCaption: () => {
            this.caption = `
            <tr>
                <th>${this.data.caption.col1}</th>
                <th>${this.data.caption.col2}</th>
                <th>${this.data.caption.col3}</th>
            </tr>
            `;
        },
        divideData: () => {
            this.data.info.forEach(element => {
                this.lines.push(`
                <tr>
                    <td>${element.name}</td>
                    <td>${element.surname}</td>
                    <td>${element.age}</td>
                </tr>`);
            });
        },
        completeTable: () => {
            var str = this.lines.join('');
            this.template = `
                <table cellspacing="0">
                ${this.caption}
                ${str}
                </table>
            `;
        }
    }
    this.render = () => {
        this.methods.createCaption();
        this.methods.divideData();
        this.methods.completeTable();
        this.data.point.innerHTML = this.template;
    }
    render();
}

makeBody(bodyData, enterPointBody, tableCaption);