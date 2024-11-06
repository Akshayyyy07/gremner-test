export default function json2html(data) {
    if (!data || data.length === 0) {
        return '<table data-user="akshaysonic2050@gmail.com"></table>';
    }

    const headers = new Set();
    data.forEach(obj => {
        Object.keys(obj).forEach(key => headers.add(key));
    });
    const headerArray = Array.from(headers);

    let table = '<table data-user="akshaysonic2050@gmail.com">\n';
    
    table += '  <thead>\n    <tr>';
    headerArray.forEach(header => {
        table += <th>${header}</th>;
    });
    table += '</tr>\n  </thead>\n';

    table += '  <tbody>\n';
    data.forEach(obj => {
        table += '    <tr>';
        headerArray.forEach(header => {
            if (obj.hasOwnProperty(header)) {
                table += <td>${obj[header]}</td>;
            } else {
                table += '<td></td>';
            }
        });
        table += '</tr>\n';
    });
    table += '  </tbody>\n</table>';

    return table;
}
