(function ($) {
  $(document).ready(function(){
    // Only show options for GCM or FCM.
  	$('input#edit-push-notifications-google-type-1').click(function(e) {
      $('fieldset#edit-gcm-credentials').show();
      $('fieldset#edit-fcm-credentials').hide();
    });

    $('input#edit-push-notifications-google-type-2').click(function(e) {
      $('fieldset#edit-gcm-credentials').hide();
      $('fieldset#edit-fcm-credentials').show();
    });

  });  
})(jQuery);
