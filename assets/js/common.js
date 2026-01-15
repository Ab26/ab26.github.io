// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });

    const citationNodes = document.querySelectorAll('[data-semantic-scholar-id]');
    if (citationNodes.length) {
        const ids = Array.from(new Set(Array.from(citationNodes).map((node) => node.dataset.semanticScholarId)));
        const updateNodes = (id, value) => {
            citationNodes.forEach((node) => {
                if (node.dataset.semanticScholarId === id) {
                    node.textContent = value;
                }
            });
        };

        ids.forEach((id) => {
            fetch(`https://api.semanticscholar.org/graph/v1/paper/CorpusID:${id}?fields=citationCount`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Semantic Scholar request failed: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    if (typeof data.citationCount === 'number') {
                        updateNodes(id, data.citationCount.toString());
                    } else {
                        updateNodes(id, 'N/A');
                    }
                })
                .catch(() => {
                    updateNodes(id, 'N/A');
                });
        });
    }
})
