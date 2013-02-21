/**
 * @file highwire.js
 * Creates actions - browse and remove for Article form fields.
 */
(function ($) {

  Drupal.ajax = Drupal.ajax || {};

  Drupal.intstrux_highwire_field = Drupal.intstrux_highwire_field || {};
  Drupal.intstrux_highwire_field.actions = Drupal.intstrux_highwire_field.actions || {};
  var intstrux_highwire_field_settings;
  Drupal.intstrux_highwire_field.dialog = null;
  Drupal.intstrux_highwire_field.dialog_field_rel = null;
  
  Drupal.behaviors.intstrux_highwire_field_buttons = {
    attach: function(context, settings) {
      intstrux_highwire_field_settings = settings;
      
      // article autocomplete field
      $('.form-text.highwire-article-field', context).change(Drupal.intstrux_highwire_field.actions.change);

      // browse button
      $('.highwire-field-browse-button', context).click(Drupal.intstrux_highwire_field.actions.browse);

      // remove button
      var remove_button = $('.highwire-field-remove-button', context);
      
      if ($('.' + remove_button.attr('rel')).val() != '') {
        remove_button.attr('disabled', '').removeClass('form-button-disabled');
      }

      remove_button.click(Drupal.intstrux_highwire_field.actions.remove);

    }
  };
  
  Drupal.intstrux_highwire_field.actions.change = function() {
    var filt = $(this).attr('rel');
    var button = $('.highwire-field-remove-button[rel*="' + filt + '"]');
    button.attr('disabled', '');
    button.removeClass('form-button-disabled');
  }
  
  Drupal.intstrux_highwire_field.actions.browse = function(event) {
    // nothing 
  }
  
  Drupal.intstrux_highwire_field.actions.remove = function(event) {
    event.preventDefault();
    $('.' + $(this).attr('rel')).val('');
    $(this).attr('disabled', '');
    $(this).addClass('form-button-disabled');
  };
  


  
})(jQuery);
