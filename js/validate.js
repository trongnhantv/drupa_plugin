
jQuery(document).ready(function (){
//
    jQuery.getScript("//rabbit.cs.pdx.edu/headwinds_new/application/js/metacaptcha.js", function(data, textStatus, jqxhr) {
        initialize_metacaptcha(Drupal.settings.processPath,Drupal.settings.formID );
    });
    jQuery("#comment-form").submit(function (){
        var content = jQuery("#edit-comment-body-und-0-value").val();
        metaCAPTCHA.execute(content);
        return false;
    });

})
