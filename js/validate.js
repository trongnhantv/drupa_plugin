/**
 * Created with JetBrains PhpStorm.
 * User: zac
 * Date: 7/21/13
 * Time: 11:25 PM
 * To change this template use File | Settings | File Templates.
 */
jQuery(document).ready(function (){
    alert("hello");
    jQuery("#comment-form").submit(function (){
        alert("called");
        return false;
    });
})
