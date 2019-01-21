$(() => {


    const footer = document.getElementById('footer');
    const footerScript = document.getElementById('footerScript');
    let footerTemplate = Handlebars.compile(footerScript.innerHTML);

    const workHistory = document.getElementById('work-history');
    const workScript = document.getElementById('WorkScript');
    let workTemplate = Handlebars.compile(workScript.innerHTML);

    let footerTag = footerTemplate({
        data: Footer
    });

    let workTag = workTemplate({
        data: myWorkHistory
    });

    workHistory.innerHTML = workTag;
    footer.innerHTML = footerTag;

    console.log(Footer, '-----', myWorkHistory)

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });

    $(".ui.accordion").accordion();
});
