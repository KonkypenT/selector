function fSelect() {
    let department = document.getElementById('department');
    let arrayData = [];
    arrayData = [
        { 'id': '1', 'title': 'IT' },
        { 'id': '2', 'title': 'Frontend development' },
        { 'id': '3', 'title': 'Backend development' }
    ];
    fillSelect(department, arrayData);
} fSelect();

function sSelect() {
    let department = document.getElementById('department');
    let arrayStyle = [];
    arrayStyle = {
            'select': [{
                'width': '300px',
                'bGround': 'white',
                'fColor': 'black',
                'bColor': 'black',
                'border': '1px solid rgba(0, 0, 0, 0.25)',
                'bRadius': '5px',
                'text': 'Please, change option'
            }],
            'option': [{
                'bGround': '#f8f8f8',
                'tBorder': '1px solid rgba(0, 0, 0, 0.25)',
                'border': '1px solid rgba(0, 0, 0, 0.25)',
                'bRadius': '5px'
            }]
        };
    styleSelect(department, arrayStyle);
} sSelect();