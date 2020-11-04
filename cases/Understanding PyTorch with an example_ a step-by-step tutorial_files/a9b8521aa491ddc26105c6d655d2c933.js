document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist95928835\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-torch101_bad_inits-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> FIRST<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Initializes parameters &quot;a&quot; and &quot;b&quot; randomly, ALMOST as we did in Numpy<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> since we want to apply gradient descent on these parameters, we need<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> to set REQUIRES_GRAD = TRUE<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">a <span class=\"pl-k\">=<\/span> torch.randn(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">requires_grad<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>, <span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>torch.float)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">b <span class=\"pl-k\">=<\/span> torch.randn(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">requires_grad<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>, <span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>torch.float)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(a, b)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> SECOND<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> But what if we want to run it on a GPU? We could just send them to device, right?<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">a <span class=\"pl-k\">=<\/span> torch.randn(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">requires_grad<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>, <span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>torch.float).to(device)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">b <span class=\"pl-k\">=<\/span> torch.randn(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">requires_grad<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>, <span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>torch.float).to(device)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(a, b)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Sorry, but NO! The to(device) &quot;shadows&quot; the gradient...<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> THIRD<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> We can either create regular tensors and send them to the device (as we did with our data)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">a <span class=\"pl-k\">=<\/span> torch.randn(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>torch.float).to(device)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">b <span class=\"pl-k\">=<\/span> torch.randn(<span class=\"pl-c1\">1<\/span>, <span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>torch.float).to(device)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> and THEN set them as requiring gradients...<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">a.requires_grad_()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">b.requires_grad_()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_bad_inits-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-torch101_bad_inits-py-LC23\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(a, b)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/dvgodoy/a9b8521aa491ddc26105c6d655d2c933/raw/e60d360ef546c9af10e511c6027d66ace83b2f84/torch101_bad_inits.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/dvgodoy/a9b8521aa491ddc26105c6d655d2c933#file-torch101_bad_inits-py\">torch101_bad_inits.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
