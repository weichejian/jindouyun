 $(document).ready(function() {
     var activate = ('createTouch' in document) ? 'touchstart' : 'click'

     var app = {
         init: function() {
             $("body > section").first().addClass("current");
             this.navigate();
             this.initTab();

         },
         navigate: function() {
             $("a.back").live(activate, function(event) {
                 var current = $(this).attr("href")
                 $(".current").removeClass("current").addClass("reverse")
                 $(current).addClass("current")
             })

             $(".menu li[data-role]").live(activate, function(event) {
                 var link = $(this),
                     section = link.closest('section'),
                     prev_element = "#" + (section.removeClass("current").addClass("reverse").attr("id"))
                 $(link.attr("data-role")).addClass("current")
                 $(".current .back").remove()
                 $(".current .toolbar").prepend("<a href=\"" + prev_element + "\" class=\"back\">< 返回</a>")
             })

         },
         initTab: function(){
            $(".menuTab div[data-role]").live(activate, function(event){
                var tab = $(this);
                $(".menuTab .menuTabItem").removeClass("active");
                tab.addClass("active");
                $(".menuTabContent .tab").removeClass("active");
                $(tab.attr("data-role")).addClass("active");
            });
         },
         render: function(){
            //TODO get list data and render to browser
         }
     }

     app.init();
 })