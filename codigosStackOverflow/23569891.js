// jQuery for automated mode
jQuery(function($) {
    var text, chars, $el, i, output;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
    $el = $(el);
    text = $el.text();
    chars = text.split('');

    // Set the screen-reader text
    $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

    // Reset output for appending
    output = '';

    // Iterate over all chars in the text
    for (i = 0; i < chars.length; i++) {
        // Create a styled element for each character and append to container
        output += '<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>';
    }

    // Write to DOM only once
    $el.append(output);
  });
});

jQuery(function($) {
    var text, chars, $el, i, output;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
        $el = $(el);
        text = $el.text();
        chars = text.split('');

        // Set the screen-reader text
        $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

        // Reset output for appending
        output = '';

        // Iterate over all chars in the text
        for (i = 0; i < chars.length; i++) {
            // Create a styled element for each character and append to container
            output += '<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>';
        }

        // Write to DOM only once
        $el.append(output);
    });
});

// jQuery for automated mode
jQuery(function($) {
    var text, chars, $el, i, output;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
        $el = $(el);
        text = $el.text();
        chars = text.split('');

        // Set the screen-reader text
        $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

        // Reset output for appending
        output = '';

        // Iterate over all chars in the text
        for (i = 0; i < chars.length; i++) {
            // Create a styled element for each character and append to container
            output += '<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>';
        }

        // Write to DOM only once
        $el.append(output);
    });
});

// jQuery for automated mode
jQuery(function($) {
    var text, chars, $el, i, output;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
    $el = $(el);
    text = $el.text();
    chars = text.split('');

    // Set the screen-reader text
    $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

    // Reset output for appending
    output = '';

    // Iterate over all chars in the text
    for (i = 0; i < chars.length; i++) {
        // Create a styled element for each character and append to container
        output += '<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>';
    }

    // Write to DOM only once
    $el.append(output);
  });
});

// jQuery for automated mode
jQuery(function($) {
    var text, chars, $el, i, output;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
    $el = $(el);
    text = $el.text();
    chars = text.split('');

    // Set the screen-reader text
    $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

    // Reset output for appending
    output = '';

    // Iterate over all chars in the text
    for (i = 0; i < chars.length; i++) {
        // Create a styled element for each character and append to container
        output += '<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>';
    }

    // Write to DOM only once
    $el.append(output);
  });
});

// jQuery for automated mode
jQuery(function($) {
    var text, chars, $el, i, output;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
    $el = $(el);
    text = $el.text();
    chars = text.split('');

    // Set the screen-reader text
    $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

    // Reset output for appending
    output = '';

    // Iterate over all chars in the text
    for (i = 0; i < chars.length; i++) {
        // Create a styled element for each character and append to container
        output += '<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>';
    }

    // Write to DOM only once
    $el.append(output);
  });
});

// jQuery for automated mode
jQuery(function($) {
    var text, chars, $el, i, output;

    // Iterate over all class occurences
    $('.textToHalfStyle').each(function(idx, el) {
    $el = $(el);
    text = $el.text();
    chars = text.split('');

    // Set the screen-reader text
    $el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + text + '</span>');

    // Reset output for appending
    output = '';

    // Iterate over all chars in the text
    for (i = 0; i < chars.length; i++) {
        // Create a styled element for each character and append to container
        output += '<span aria-hidden="true" class="halfStyle" data-content="' + chars[i] + '">' + chars[i] + '</span>';
    }

    // Write to DOM only once
    $el.append(output);
  });
});

jQuery(function($) {
    var halfstyle_text, halfstyle_chars, $halfstyle_el, halfstyle_i, halfstyle_output, halfstyle_style;

    // Iterate over all class occurrences
    $('.textToHalfStyle').each(function(idx, halfstyle_el) {
        $halfstyle_el = $(halfstyle_el);
        halfstyle_style = $halfstyle_el.data('halfstyle') || 'hs-base';
        halfstyle_text = $halfstyle_el.text();
        halfstyle_chars = halfstyle_text.split('');

        // Set the screen-reader text
        $halfstyle_el.html('<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + halfstyle_text + '</span>');

        // Reset output for appending
        halfstyle_output = '';

        // Iterate over all chars in the text
        for (halfstyle_i = 0; halfstyle_i < halfstyle_chars.length; halfstyle_i++) {
            // Create a styled element for each character and append to container
            halfstyle_output += '<span aria-hidden="true" class="halfStyle ' + halfstyle_style + '" data-content="' + halfstyle_chars[halfstyle_i] + '">' + halfstyle_chars[halfstyle_i] + '</span>';
        }

        // Write to DOM only once
        $halfstyle_el.append(halfstyle_output);
    });
});