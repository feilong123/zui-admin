$(document).ready(function () {
    $('#example').DataTable({
        language: {
            url: '/localisation/Chinese.json'
        },
        "ajax": "data/objects_deep.txt",
        "columns": [
            {
                "data": null,
                "render": function ( data, type, row, meta ) {
                  return '';
                }
            },
            { 
                "data": "name" 
            },
            { 
                "data": "hr.position" 
            },
            { 
                "data": "contact.0" 
            },
            { 
                "data": "contact.1" 
            },
            { 
                "data": "hr.start_date" 
            },
            { 
                "data": "hr.salary" 
            }
        ],
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]]
    });
});