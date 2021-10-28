$('#slider').on('input', function(){
        var value = (($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))) * 100;
        $(this).attr('style', 'background: linear-gradient(to right, #d22d27 0%, #d22d27 ' +
          value +
          '%, #eaeefb ' +
          value +
          '%, #eaeefb 100%)');

        $('.length').html($(this).val());

        var new_class = 'weak';

        if ($(this).val() < 6) {
          new_class = 'weak';
        } else if ($(this).val() >= 6 && $(this).val() < 10) {
          new_class = 'base';
        } else if ($(this).val() >= 10 && $(this).val() < 16) {
          new_class = 'normal';
        } else if ($(this).val() >= 16) {
          new_class = 'strong';
        }

        $('.password-strength').attr('class', 'password-strength');
        $('.password-strength').addClass(new_class);
      });
      $(document).ready(function(){
        $('#slider').val(12).trigger('input');
      });

      function copyToClipboard(text) {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild( textArea );

        textArea.select();

        try {
          var successful = document.execCommand('copy');
        } catch (err) {
          console.log('Oops, unable to copy');
        }
        document.body.removeChild(textArea);
      }

      $('.generate').click(function(){
        var $el = $(this),
            x = 500;

        $el.addClass('rotate-360');
        setTimeout(function(){
          $el.removeClass('rotate-360');
        }, x);
      });

      $('.copy').click(function(){
        copyToClipboard($('input[name="password"]').val());
      });
      
      $('label').click(function(e){
        if ($('input:checkbox:checked').length == 0)
          e.preventDefault();
      });

      $('.copy').click(function(){
        var $el = $(this),
            x = 500,
            originalColor = $el.css('color');

        $el.css('color', '#eb8b13');
        setTimeout(function(){
          $el.css('color', originalColor);
        }, x);
      });

      $('.generate').click(_generate);
      $('#slider').on('input', _generate);
      $('input[type="checkbox"]').on('change', _generate);