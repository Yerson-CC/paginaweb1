jQuery(document).ready(function() {
    // Retraso de tiempo de código corto de animación de caída de confeti
        var self,delay,time;
        jQuery(".confetti-fall-animation").each(function(i) {
            self = jQuery(this);
            delay = 1000 * parseFloat(self.attr("data-delay"));
            time = 1000 * parseFloat(self.attr("data-time"));
        });
        if ((delay >= 50) && (delay <= 3600 * 1000) && (time >= 50) && (time <= 3600 * 1000)) {
            setTimeout(function() {
                confetti.start();
                setTimeout(function() {
                    confetti.stop();
                }, time);
            }, delay);
        }
    
    });