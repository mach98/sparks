export const renderMathContent = (content: string) => {
  const preProcessContent = (content: string) => {
    return content.replace(/ /g, '\\;');
  };
  const processedContent = preProcessContent(content);
  const encodedContent = encodeURIComponent(processedContent);
  const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css" integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+" crossorigin="anonymous">
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" integrity="sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg" crossorigin="anonymous"></script>
        <style>
        #content {
          font-size: 3em;

        }
      </style>
        <script>
          document.addEventListener("DOMContentLoaded", function() {
            var content = decodeURIComponent("${encodedContent}");
            var html = katex.renderToString(content, { throwOnError: false, strict: 'ignore'});
            document.getElementById('content').innerHTML = html;
          });
        </script>
      </head>
      <body>
        <div id="content"></div>
      </body>
      </html>
    `;
  return htmlContent;
};
