// rangy.init();

// var editor = $('#editor');

// var format = function () {

//     var before = -1;
//     var html = $.trim(editor.text())
//     .split("\n")
//     .reverse()
//     .map(function (line) {

//         var a = line.length === before ? 'merge-end' : '';
//         before = line.length;

//         return '<pre class="' + a + '"><span>' + line.split('').join('</span><span>') + '</span></pre>';
//     })
//     .reverse()
//     .join('');

//     editor.html(html);
// };

// var getSelectedNodes = function () {

//     var i;
//     var nodes = [];
//     var selection = rangy.getSelection();

//     for (i = 0; i < selection.rangeCount; ++i) {

//         selection
//         .getRangeAt(i)
//         .getNodes()
//         .forEach(function (node) {

//             if ($(node).is('span')) {

//                 nodes.push(node);
//             }
//         });
//     }

//     return nodes;
// };

// var highlight = function (nodes, beforeNode) {

//     var currentNode = $(nodes.shift()).addClass('highlight');
//     var currentParent = currentNode.parent();

//     if (beforeNode) {

//         var beforeParent = beforeNode.parent();

//         if (currentParent.get(0) !== beforeParent.get(0)) {

//             currentNode.addClass('begin');
//             beforeNode.addClass('end');
//             beforeParent.addClass('merge-begin');
//         }

//     } else {

//         currentNode.addClass('begin');
//     }

//     if (nodes.length) {

//         highlight(nodes, currentNode);

//     } else {

//         currentNode.addClass('end');
//     }
// };

// format();

// $(document).on('mouseup', function () {

//     $('.highlight').removeClass('highlight begin end');
//     highlight(getSelectedNodes());
// });
