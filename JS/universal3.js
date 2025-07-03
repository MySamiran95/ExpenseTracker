const api = "https://script.google.com/macros/s/AKfycbzGaNOQtQcdZ9K38BVeiS7kfl23VAPVtvpzH1W53ky9wtottEDBsbpSfiLAQfXRqAvz5w/exec";



////////////////////////////////////////////////

function formatDecimalsOnly() {
  const elements = document.body.getElementsByTagName("*");

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    for (let j = 0; j < el.childNodes.length; j++) {
      const node = el.childNodes[j];

      if (node.nodeType === 3) { // Text node
        let text = node.nodeValue;

        // Only replace numbers that have a decimal point
        const replaced = text.replace(/-?\d*\.\d+/g, (match) => {
          let num = parseFloat(match);
          if (isNaN(num)) return match;

          // Truncate without rounding
          num = Math.round(num * 100) / 100;
          return num.toString();
        });

        if (replaced !== text) {
          node.nodeValue = replaced;
        }
      }
    }
  }
}


window.onload = function() {
  formatDecimalsOnly();
};