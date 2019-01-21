$(() => {


    const workHistory = document.getElementById('work-history');
    const workScript = document.getElementById('WorkScript');
    const footer = document.getElementById('footer');
    const footerScript = document.getElementById('footerScript');

    const project = document.getElementById('projects');
    const projectScript = document.getElementById('projectScript');
    
    if(workScript) {
        let workTemplate = Handlebars.compile(workScript.innerHTML);
        let workTag = workTemplate({
            data: myWorkHistory
        });
        workHistory.innerHTML = workTag;
    }

    if(footerScript) {
        let footerTemplate = Handlebars.compile(footerScript.innerHTML);
        let footerTag = footerTemplate({
            data: Footer
        });
        footer.innerHTML = footerTag;
    }

    if(projectScript) {
        let projectTemplate = Handlebars.compile(projectScript.innerHTML);
        let projectTag = projectTemplate({
            projects
        });
        project.innerHTML = projectTag;
    }



    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });

    $(".ui.accordion").accordion();
});
