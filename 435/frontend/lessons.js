const lessonsData = {
    
  "intro": {
        title: "Introduction to CSS",
        category: "Basics",
        prev: null,
        next: "selectors",
        content: `
            <p class="lead">CSS (Cascading Style Sheets) is the style sheet language used for describing the presentation of a document written in a markup language such as HTML.</p>

            <p>It separates the content (HTML) from the presentation (visual design). This means you can change the entire look of a website just by changing one file!</p>
            
            <h2>Why use CSS?</h2>
            <p>CSS solves a big problem: <strong>HTML was never intended to contain tags for formatting a web page!</strong></p>
            <p>CSS allows you to create great-looking web pages. It separates the content (HTML) from the presentation (visual design). This means you can change the entire look of a website just by changing one file!</p>

            <h2>CSS Syntax</h2>
            <p>A CSS rule-set consists of a selector and a declaration block:</p>
            
            <div class="code-block">
h1 {
  color: blue;
  font-size: 12px;
}
            </div>
            
            <p>In this example, <code>h1</code> is the selector, and everything inside the curly braces <code>{}</code> is the declaration block.</p>

            <p>Each CSS rule-set consists of a selector and a declaration block. The selector is the HTML element you want to style, and the declaration block contains one or more declarations separated by semicolons.</p>

            property: value;

            <p>In this example, <code>color</code> is the property, and <code>blue</code> is the value. They are separated by a colon.</p>
            
            <a href="editor.html" class="btn btn-outline" style="margin-top:1rem">Open in Live Editor →</a>
        `
    },

  "selectors": {
        title: "CSS Selectors",
        category: "Basics",
        prev: "intro",
        next: "colors",
        content: `
            <p class="lead">Selectors are the heart of CSS. They are patterns used to select the element(s) you want to style.</p>
            
            <h2>1. The Element Selector</h2>
            <p>The element selector selects HTML elements based on the element name.</p>
            
<div class="example-card">

  <h3>Example</h3>
  <p>Here, all &lt;p&gt; elements on the page will be center-aligned, with a red text color:</p>

  <div class="example-code code-block"
       data-html="<p>Every paragraph will be affected by the style.</p>
<p>Me too!</p>
<p>And me!</p>"
       data-css="p { text-align: center; color: red; }">

<pre><code>p {
  text-align: center;
  color: red;
}</code></pre>

  </div>

  <a href="editor.html" class="try-btn open-editor">
    Try it Yourself »
  </a>

</div>

<h2>2. The Class Selector</h2>
<p>To select elements with a specific class, write a period (.) character, followed by the class name.</p>

<div class="code-block"
     data-html="<p class='center'>This paragraph will be centered.</p>
<p>This paragraph is not affected.</p>"
     data-css="/* Selects all elements with class=&quot;center&quot; */
.center {
  text-align: center;
  color: orange;
}">

<pre><code>/* Selects all elements with class="center" */
.center {
  text-align: center;
  color: orange;
}</code></pre>

</div>

<p>You can also specify that only specific HTML elements should be affected by a class.</p>

<h2>3. The ID Selector</h2>
<p>
  To select a specific element with a unique id, write a hash (#) character,
  followed by the id name.
</p>

<div class="code-block"
     data-html="<p id='highlight'>This paragraph will be styled.</p>
<p>This paragraph is not affected.</p>"
     data-css="/* Selects the element with id=&quot;highlight&quot; */
#highlight {
  text-align: center;
  color: red;
}">

<pre><code>/* Selects the element with id="highlight" */
#highlight {
  text-align: center;
  color: red;
}</code></pre>

</div>

<p>
  An id name must be unique within a page, meaning it can only be used once.
</p>

<p style="color: blue;">An id name can't start with a number.</p>

<h2>4. The Universal Selector</h2>
<p>
  The universal selector (*) selects <strong>all HTML elements</strong> on the page.
</p>

<div class="code-block"
     data-html="<h3>This is a heading</h3>
<p>This is a paragraph.</p>
<button>A button</button>"
     data-css="/* Selects all elements */
* {
  color: purple;
  font-family: Arial, sans-serif;
}">

<pre><code>/* Selects all elements */
* {
  color: purple;
  font-family: Arial, sans-serif;
}</code></pre>

</div>

<p>
  The universal selector applies the style to every element on the page.
</p>

<p style="color: blue;">
  The universal selector should be used carefully, as it affects all elements.
</p>

<h2>5. The Grouping Selector</h2>
<p>
  The grouping selector allows you to apply the same styles to multiple elements
  by separating them with commas.
</p>

<div class="code-block"
     data-html="<h3>This is a heading</h3>
<p>This is a paragraph.</p>
<div>This is a div element.</div>"
     data-css="/* Selects multiple elements */
h3, p, div {
  color: green;
  text-align: center;
}">

<pre><code>/* Selects multiple elements */
h3, p, div {
  color: green;
  text-align: center;
}</code></pre>

</div>

<p>
  In this example, the same style is applied to all <code>h3</code>,
  <code>p</code>, and <code>div</code> elements.
</p>

<p style="color: blue;">
  Grouping selectors help reduce repetition and keep CSS code cleaner.
</p>

 `
    },

  "howto": {
          title: "How to",
          category: "Basics",
          prev: "grouping",
          next: "colors",
          content: `
    <h2>1. How to Add CSS</h2>

    <p>
      CSS can be added to HTML documents in three different ways:
      <strong>External CSS</strong>, <strong>Internal CSS</strong>, and
      <strong>Inline CSS</strong>.
    </p>

    <p style="color: blue;">
      External CSS is the most common and recommended method.
    </p>

    <!-- ===================== -->
    <!-- External CSS -->
    <!-- ===================== -->

    <h3>1. External CSS</h3>
    <p>
      With external CSS, styles are written in a separate <code>.css</code> file
      and linked to the HTML document using the <code>&lt;link&gt;</code> tag.
    </p>

    <div class="code-block"
         data-html="<h3>Hello World</h3>
<p>This page uses external CSS.</p>"
         data-css="h3 {
  color: green;
}

p {
  color: gray;
}">

<pre><code>&lt;!-- HTML file --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;

/* styles.css */
h3 {
  color: green;
}

p {
  color: gray;
}</code></pre>

    </div>

    <p>
      External CSS allows you to control the layout of multiple pages
      with a single style sheet.
    </p>

    <!-- ===================== -->
    <!-- Internal CSS -->
    <!-- ===================== -->

    <h3>2. Internal CSS</h3>
    <p>
      Internal CSS is defined inside the <code>&lt;style&gt;</code> tag
      within the <code>&lt;head&gt;</code> section of an HTML page.
    </p>

    <div class="code-block"
         data-html="<h3>Hello World</h3>
<p>This page uses internal CSS.</p>"
         data-css="h3 {
  color: blue;
}

p {
  color: black;
}">

<pre><code>&lt;head&gt;
  &lt;style&gt;
    h3 {
      color: blue;
    }
    p {
      color: black;
    }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>

    </div>

    <p>
      Internal CSS is useful when a single HTML page has a unique style.
    </p>

    <!-- ===================== -->
    <!-- Inline CSS -->
    <!-- ===================== -->

    <h3>3. Inline CSS</h3>
    <p>
      Inline CSS is applied directly to individual HTML elements
      using the <code>style</code> attribute.
    </p>

    <div class="code-block"
         data-html="<h3 style='color: red;'>Hello World</h3>
<p style='color: purple;'>This text uses inline CSS.</p>"
         data-css="">

<pre><code>&lt;h3 style=&quot;color: red;&quot;&gt;Hello World&lt;/h3&gt;
&lt;p style=&quot;color: purple;&quot;&gt;
  This text uses inline CSS.
&lt;/p&gt;</code></pre>

    </div>

    <p>
      Inline CSS should be avoided in most cases, as it mixes content
      with presentation and is harder to maintain.
    </p>

    <p style="color: blue;">
      Best Practice: Use <strong>External CSS</strong> whenever possible.
    </p>
  
    <h2>2. How to add Comments</h2>

    <p>
      Comments are used to explain CSS code and make it easier to understand.
      They are especially helpful when you edit the code later or work in a team.
    </p>

    <p>
      Comments can also be used to temporarily disable parts of CSS code
      without deleting them.
    </p>

    <p style="color: blue;">
      Important: CSS comments are completely ignored by browsers.
    </p>

    <!-- ===================== -->
    <!-- Single-line Comment -->
    <!-- ===================== -->

    <h3>Single-line CSS Comments</h3>
    <p>
      A CSS comment starts with <code>/*</code> and ends with <code>*/</code>.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is red.</p>"
         data-css="/* This is a single-line comment */
p {
  color: red;
}">

<pre><code>/* This is a single-line comment */
p {
  color: red;
}</code></pre>

    </div>

    <p>
      This comment explains what the CSS rule does, but it does not affect the output.
    </p>

    <!-- ===================== -->
    <!-- Inline Comment -->
    <!-- ===================== -->

    <h3>Inline Comments</h3>
    <p>
      You can place comments at the end of a line to explain a specific property.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is red.</p>"
         data-css="p {
  color: red;  /* Set text color to red */
}">

<pre><code>p {
  color: red;  /* Set text color to red */
}</code></pre>

    </div>

    <p>
      Inline comments are useful for clarifying individual CSS properties.
    </p>

    <!-- ===================== -->
    <!-- Middle of Line -->
    <!-- ===================== -->

    <h3>Comments Inside a Line</h3>
    <p>
      Comments can even be placed in the middle of a CSS value.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is blue.</p>"
         data-css="p {
  color: /*red*/ blue;
}">

<pre><code>p {
  color: /*red*/ blue;
}</code></pre>

    </div>

    <p>
      In this example, the browser ignores the commented value and applies the remaining one.
    </p>

    <!-- ===================== -->
    <!-- Multi-line Comment -->
    <!-- ===================== -->

    <h3>Multi-line Comments</h3>
    <p>
      CSS comments can span multiple lines.
      This is useful for longer explanations.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is red.</p>"
         data-css="/* This is
a multi-line
comment */
p {
  color: red;
}">

<pre><code>/* This is
a multi-line
comment */
p {
  color: red;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- HTML + CSS Comments -->
    <!-- ===================== -->

    <h3>HTML and CSS Comments</h3>
    <p>
      HTML and CSS use different comment syntaxes.
    </p>

    <ul>
      <li><strong>HTML comments:</strong> <code>&lt;!-- comment --&gt;</code></li>
      <li><strong>CSS comments:</strong> <code>/* comment */</code></li>
    </ul>

    <div class="code-block"
         data-html="<!-- This is an HTML comment -->
<p>This paragraph is styled with CSS.</p>"
         data-css="/* This is a CSS comment */
p {
  color: green;
}">

<pre><code>&lt;!-- This is an HTML comment --&gt;
p {
  color: green;
}</code></pre>

    </div>

    <p style="color: blue;">
      Best Practice: Use clear and meaningful comments to make your CSS easier to maintain.
    </p>

    `
},

  "colors": {
        title: "CSS Colors",
        category: "Basics",
        prev: "selectors",
        next: "boxmodel",
        content: `
            <h2>CSS Colors</h2>

    <p>
      In CSS, colors can be specified using <strong>color names</strong>,
      <strong>HEX</strong>, <strong>RGB</strong>, <strong>HSL</strong>, and also
      transparent formats like <strong>RGBA</strong> and <strong>HSLA</strong>.
    </p>
    <p style="color: blue;">
      Tip: The <code>color</code> property changes text color, and
      <code>background-color</code> changes the background color.
    </p>

    <!-- ===================== -->
    <!-- 1) Color Names -->
    <!-- ===================== -->
    <h3>1. Color Names</h3>
    <p>
      CSS supports many predefined color names. For example:
      <code>Tomato</code>, <code>DodgerBlue</code>, <code>MediumSeaGreen</code>.
    </p>

    <div class="code-block"
         data-html="<h3 class='t'>Tomato Heading</h3>
<p class='b'>DodgerBlue paragraph</p>
<p class='g'>MediumSeaGreen paragraph</p>"
         data-css=".t { color: Tomato; }
.b { color: DodgerBlue; }
.g { color: MediumSeaGreen; }">

<pre><code>/* Color Names */
.t { color: Tomato; }
.b { color: DodgerBlue; }
.g { color: MediumSeaGreen; }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 2) HEX -->
    <!-- ===================== -->
    <h3>2. HEX Colors</h3>
    <p>
      HEX colors start with <code>#</code> followed by 6 hexadecimal digits.
      Example: <code>#ff0000</code> is red.
    </p>

    <div class="code-block"
         data-html="<div class='box'>HEX Background</div>"
         data-css=".box {
  background-color: #ffdd57;
  color: #111827;
  padding: 16px;
  border-radius: 10px;
  font-weight: 600;
}">

<pre><code>/* HEX */
.box {
  background-color: #ffdd57;
  color: #111827;
}</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 3) RGB -->
    <!-- ===================== -->
    <h3>3. RGB Colors</h3>
    <p>
      RGB uses the formula <code>rgb(red, green, blue)</code>. Each value ranges
      from <code>0</code> to <code>255</code>.
    </p>

    <div class="code-block"
         data-html="<p class='rgb1'>rgb(255, 0, 0)</p>
<p class='rgb2'>rgb(0, 128, 0)</p>
<p class='rgb3'>rgb(0, 0, 255)</p>"
         data-css=".rgb1 { color: rgb(255, 0, 0); }
.rgb2 { color: rgb(0, 128, 0); }
.rgb3 { color: rgb(0, 0, 255); }">

<pre><code>/* RGB */
.rgb1 { color: rgb(255, 0, 0); }
.rgb2 { color: rgb(0, 128, 0); }
.rgb3 { color: rgb(0, 0, 255); }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 4) RGBA (opacity) -->
    <!-- ===================== -->
    <h3>4. RGBA Colors (Transparency)</h3>
    <p>
      RGBA adds an alpha channel (opacity) from <code>0.0</code> (transparent)
      to <code>1.0</code> (opaque).
    </p>

    <div class="code-block"
         data-html="<div class='overlay'>RGBA overlay example</div>"
         data-css=".overlay {
  background-color: rgba(255, 0, 0, 0.35);
  padding: 18px;
  border-radius: 10px;
  font-weight: 600;
}">

<pre><code>/* RGBA */
.overlay {
  background-color: rgba(255, 0, 0, 0.35);
}</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 5) HSL -->
    <!-- ===================== -->
    <h3>5. HSL Colors</h3>
    <p>
      HSL stands for <strong>Hue</strong> (0-360), <strong>Saturation</strong> (%),
      and <strong>Lightness</strong> (%).
    </p>

    <div class="code-block"
         data-html="<p class='hsl1'>hsl(0, 100%, 50%)</p>
<p class='hsl2'>hsl(120, 60%, 35%)</p>
<p class='hsl3'>hsl(240, 100%, 60%)</p>"
         data-css=".hsl1 { color: hsl(0, 100%, 50%); }
.hsl2 { color: hsl(120, 60%, 35%); }
.hsl3 { color: hsl(240, 100%, 60%); }">

<pre><code>/* HSL */
.hsl1 { color: hsl(0, 100%, 50%); }
.hsl2 { color: hsl(120, 60%, 35%); }
.hsl3 { color: hsl(240, 100%, 60%); }</code></pre>
    </div>

    <p style="color: blue;">
      Summary: Use color names for quick demos, HEX for design systems, and RGB/HSL when you want precise control.
    </p>
  `
},

backgrounds: {
  title: "CSS Backgrounds",
  category: "Basics",
  prev: "colors",
  next: "borders",
  content: `
    <h2>CSS Backgrounds</h2>

    <p>
      CSS provides several properties for setting the background of an element.
      The most common ones include <code>background-color</code>,
      <code>background-image</code>, <code>background-repeat</code>, and
      <code>background-size</code>.
    </p>

    <p style="color: blue;">
      The <code>background</code> shorthand can also set multiple background properties at once.
    </p>

    <!-- ===================== -->
    <!-- background-color -->
    <!-- ===================== -->

    <h3>1. Background Color</h3>
    <p>
      The <code>background-color</code> property sets the background color of an element.
    </p>

    <div class="code-block"
         data-html="<div class='bg1'>Box with background color</div>"
         data-css=".bg1 {
  background-color: lightblue;
  padding: 16px;
  border-radius: 8px;
}">

<pre><code>/* background-color example */
.bg1 {
  background-color: lightblue;
  padding: 16px;
  border-radius: 8px;
}</code></pre>

    </div>

    <p>
      Use <code>background-color</code> to add solid color backgrounds to elements.
    </p>

    <!-- ===================== -->
    <!-- background-image -->
    <!-- ===================== -->

    <h3>2. Background Image</h3>
    <p>
      The <code>background-image</code> property sets an image as the background.
    </p>

    <div class="code-block"
         data-html="<div class='bg2'>Hello with image</div>"
         data-css=".bg2 {
  background-image: url('https://www.w3schools.com/css/img_lights.jpg');
  padding: 36px;
  color: white;
  text-shadow: 1px 1px #000;
}">

<pre><code>/* background-image example */
.bg2 {
  background-image: url('https://www.w3schools.com/css/img_lights.jpg');
  padding: 36px;
  color: white;
  text-shadow: 1px 1px #000;
}</code></pre>

    </div>

    <p>
      Replace the URL with your own image path to change the background image.
    </p>

    <!-- ===================== -->
    <!-- background-repeat -->
    <!-- ===================== -->

    <h3>3. Background Repeat</h3>
    <p>
      By default, background images repeat. You can control this with
      <code>background-repeat</code>.
    </p>

    <div class="code-block"
         data-html="<div class='bg3'>No repeat</div>"
         data-css=".bg3 {
  background-image: url('https://www.w3schools.com/css/img_forest.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
  color: white;
  text-shadow: 1px 1px #000;
}">

<pre><code>/* background-repeat example */
.bg3 {
  background-image: url('https://www.w3schools.com/css/img_forest.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}</code></pre>

    </div>

    <p>
      Use <code>no-repeat</code> and <code>background-size</code> to control how the image fills the element.
    </p>

    <!-- ===================== -->
    <!-- background shorthand -->
    <!-- ===================== -->

    <h3>4. Background Shorthand</h3>
    <p>
      The <code>background</code> shorthand can set multiple background properties at once.
    </p>

    <div class="code-block"
         data-html="<div class='bg4'>Shorthand Example</div>"
         data-css=".bg4 {
  background: lightgreen url('https://www.w3schools.com/css/img_mountains.jpg') no-repeat center/cover;
  padding: 40px;
  color: white;
  text-shadow: 1px 1px #000;
}">

<pre><code>/* background shorthand */
.bg4 {
  background: lightgreen url('https://www.w3schools.com/css/img_mountains.jpg')
              no-repeat center/cover;
}</code></pre>

    </div>

    <p style="color: blue;">
      Tip: Using shorthand saves space and can make CSS cleaner.
    </p>
  `
},

borders: {
  title: "CSS Borders",
  category: "Basics",
  prev: "backgrounds",
  next: "boxmodel",
  content: `
    <h2>CSS Borders</h2>

    <p>
      Borders in CSS are used to define the outer edges of elements.
      You can control the <strong>width</strong>, <strong>style</strong>, and <strong>color</strong> of borders.
    </p>

    <p style="color: blue;">
      Tip: Borders can help visually separate content and improve layout.
    </p>

    <!-- ===================== -->
    <!-- Simple Border -->
    <!-- ===================== -->
    <h3>1. Simple Border</h3>
    <p>
      The <code>border</code> shorthand property can set width, style, and color all at once.
    </p>

    <div class="code-block"
         data-html="<div class='box1'>Box with simple border</div>"
         data-css=".box1 {
  border: 3px solid black;
  padding: 16px;
}">

<pre><code>/* Simple border */
.box1 {
  border: 3px solid black;
  padding: 16px;
}</code></pre>

    </div>

    <p>
      This example uses a solid black line as a border around the element.
    </p>

    <!-- ===================== -->
    <!-- Colored Border -->
    <!-- ===================== -->
    <h3>2. Colored Border</h3>
    <p>
      Border colors can be added just like text colors.
    </p>

    <div class="code-block"
         data-html="<div class='box2'>Colored border</div>"
         data-css=".box2 {
  border: 4px solid crimson;
  padding: 16px;
}">

<pre><code>/* Border with color */
.box2 {
  border: 4px solid crimson;
  padding: 16px;
}</code></pre>

    </div>

    <p>
      You can combine any valid CSS color value with your border style.
    </p>

    <!-- ===================== -->
    <!-- Different Border Styles -->
    <!-- ===================== -->
    <h3>3. Border Styles</h3>
    <p>
      CSS supports many border styles, such as <code>dashed</code>, <code>dotted</code>, and <code>double</code>.
    </p>

    <div class="code-block"
         data-html="<div class='box3a'>Dashed border</div>
<div class='box3b'>Dotted border</div>
<div class='box3c'>Double border</div>"
         data-css=".box3a {
  border: 2px dashed #0077cc;
  padding: 8px;
}
.box3b {
  border: 2px dotted #cc7700;
  padding: 8px;
}
.box3c {
  border: 4px double #337733;
  padding: 8px;
}">

<pre><code>/* Different border styles */
.box3a {
  border: 2px dashed #0077cc;
  padding: 8px;
}
.box3b {
  border: 2px dotted #cc7700;
  padding: 8px;
}
.box3c {
  border: 4px double #337733;
  padding: 8px;
}</code></pre>

    </div>

    <p>
      These styles show how you can change the visual look of a border easily.
    </p>

    <!-- ===================== -->
    <!-- Border Radius -->
    <!-- ===================== -->
    <h3>4. Rounded Corners</h3>
    <p>
      You can make border corners rounded using <code>border-radius</code>.
    </p>

    <div class="code-block"
         data-html="<div class='box4'>Rounded border</div>"
         data-css=".box4 {
  border: 3px solid #444;
  border-radius: 12px;
  padding: 16px;
}">

<pre><code>/* Rounded corners */
.box4 {
  border: 3px solid #444;
  border-radius: 12px;
  padding: 16px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Rounded borders create a softer look and are great for buttons and cards.
    </p>
  `
},

margin: {
  title: "CSS Margin",
  category: "Box Model",
  prev: "borders",
  next: "padding",
  content: `
    <h2>CSS Margin</h2>

    <p>
      The CSS <code>margin</code> property is used to create space around elements.
      Margin pushes other elements away by adding space outside of the element’s border.
    </p>

    <p style="color: blue;">
      Margin does not affect the element’s content area, only the spacing around it.
    </p>

    <!-- ===================== -->
    <!-- Individual Sides -->
    <!-- ===================== -->
    <h3>1. Margin on One Side</h3>
    <p>
      You can set margin for a single side using properties such as
      <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>,
      and <code>margin-left</code>.
    </p>

    <div class="code-block"
         data-html="<div class='m1'>Margin top 50px</div>"
         data-css=".m1 {
  margin-top: 50px;
  background: lightyellow;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* margin-top example */
.m1 {
  margin-top: 50px;
  background: lightyellow;
  padding: 12px;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      Only the top margin changes in this example, spacing the element downward.
    </p>

    <!-- ===================== -->
    <!-- Margin All Sides -->
    <!-- ===================== -->
    <h3>2. Margin on All Sides</h3>
    <p>
      The <code>margin</code> shorthand lets you set all margins at once.
    </p>

    <div class="code-block"
         data-html="<div class='m2'>Margins on all sides</div>"
         data-css=".m2 {
  margin: 40px;
  background: lightcoral;
  padding: 12px;
  color: white;
}">

<pre><code>/* margin all sides */
.m2 {
  margin: 40px;
  background: lightcoral;
  padding: 12px;
  color: white;
}</code></pre>

    </div>

    <p>
      Setting a single value for <code>margin</code> applies the same spacing
      on all four sides.
    </p>

    <!-- ===================== -->
    <!-- Different Margins -->
    <!-- ===================== -->
    <h3>3. Different Margins</h3>
    <p>
      You can specify different values for top, right, bottom, and left margins.
    </p>

    <div class="code-block"
         data-html="<div class='m3'>Top, Right, Bottom, Left</div>"
         data-css=".m3 {
  margin: 10px 30px 50px 70px;
  background: lightseagreen;
  padding: 12px;
  color: white;
}">

<pre><code>/* margin: top right bottom left */
.m3 {
  margin: 10px 30px 50px 70px;
  background: lightseagreen;
  padding: 12px;
  color: white;
}</code></pre>

    </div>

    <p>
      The values are applied in the order: top → right → bottom → left.
    </p>

    <!-- ===================== -->
    <!-- Auto Margin (Centering) -->
    <!-- ===================== -->
    <h3>4. Auto Margin (Centering)</h3>
    <p>
      If you give an element a fixed width, <code>margin: auto</code> will
      center the element horizontally.
    </p>

    <div class="code-block"
         data-html="<div class='center'>Centered box</div>"
         data-css=".center {
  margin: auto;
  width: 220px;
  background: mediumslateblue;
  padding: 16px;
  color: white;
}">

<pre><code>/* auto margin to center */
.center {
  margin: auto;
  width: 220px;
  background: mediumslateblue;
  padding: 16px;
  color: white;
}</code></pre>

    </div>

    <p style="color: blue;">
      This is a common technique to center fixed-width elements horizontally.
    </p>
  `
},

padding: {
  title: "CSS Padding",
  category: "Box Model",
  prev: "margin",
  next: "display",
  content: `
    <h2>CSS Padding</h2>

    <p>
      The CSS <code>padding</code> property is used to create space
      <strong>inside</strong> an element between the content and the border.
      Padding increases the element’s internal space.
    </p>

    <p style="color: blue;">
      Note: Padding affects only the inside space — it does not move other elements away (like margin does).
    </p>

    <!-- ===================== -->
    <!-- Padding on All Sides -->
    <!-- ===================== -->
    <h3>1. Padding on All Sides</h3>
    <p>
      You can set padding on all four sides at once using the shorthand
      <code>padding</code> property.
    </p>

    <div class="code-block"
         data-html="<div class='p1'>Box with padding</div>"
         data-css=".p1 {
  padding: 30px;
  background: lightgoldenrodyellow;
  border: 1px solid #888;
}">

<pre><code>/* padding all sides */
.p1 {
  padding: 30px;
  background: lightgoldenrodyellow;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      This example shows space added around the content inside the box.
    </p>

    <!-- ===================== -->
    <!-- Padding on Individual Sides -->
    <!-- ===================== -->
    <h3>2. Padding for Each Side</h3>
    <p>
      You can set padding for each side of an element individually:
      <code>padding-top</code>, <code>padding-right</code>,
      <code>padding-bottom</code>, <code>padding-left</code>.
    </p>

    <div class="code-block"
         data-html="<div class='p2'>Different padding</div>"
         data-css=".p2 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  background: lightcyan;
  border: 1px solid #888;
}">

<pre><code>/* padding on individual sides */
.p2 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  background: lightcyan;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      Values are written in this order:
      <code>top → right → bottom → left</code>.
    </p>

    <!-- ===================== -->
    <!-- Shorthand Multiple Values -->
    <!-- ===================== -->
    <h3>3. Padding Shorthand (Multiple Values)</h3>
    <p>
      You can also write multiple values in a single line:
      <code>padding: top right bottom left;</code>
    </p>

    <div class="code-block"
         data-html="<div class='p3'>Padding shorthand</div>"
         data-css=".p3 {
  padding: 10px 20px 30px 40px;
  background: lightpink;
  border: 1px solid #888;
}">

<pre><code>/* padding shorthand */
.p3 {
  padding: 10px 20px 30px 40px;
  background: lightpink;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p style="color: blue;">
      Tip: Using shorthand makes your CSS cleaner and easier to read.
    </p>
  `
},

dimension: {
  title: "CSS Dimension",
  category: "Box Model",
  prev: "padding",
  next: "display",
  content: `
    <h2>CSS Dimension</h2>

    <p>
      CSS dimensions define the <strong>width</strong> and <strong>height</strong> of elements. 
      These properties control how much horizontal and vertical space an element occupies.
    </p>

    <p style="color: blue;">
      Tip: When setting width and height, consider how padding, border, and margin affect the total size of elements.
    </p>

    <!-- ===================== -->
    <!-- Width Example -->
    <!-- ===================== -->
    <h3>1. Setting Width</h3>
    <p>
      The <code>width</code> property sets the horizontal dimension of an element.
    </p>

    <div class="code-block"
         data-html="<div class='dim1'>Width: 300px</div>"
         data-css=".dim1 {
  width: 300px;
  background: lightblue;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* width example */
.dim1 {
  width: 300px;
  background: lightblue;
  padding: 12px;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      This box is fixed at 300px wide. If the viewport is narrower, it may overflow.
    </p>

    <!-- ===================== -->
    <!-- Height Example -->
    <!-- ===================== -->
    <h3>2. Setting Height</h3>
    <p>
      The <code>height</code> property sets the vertical dimension of an element.
    </p>

    <div class="code-block"
         data-html="<div class='dim2'>Height: 150px</div>"
         data-css=".dim2 {
  height: 150px;
  background: lightcoral;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* height example */
.dim2 {
  height: 150px;
  background: lightcoral;
  padding: 12px;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      This box has a fixed height of 150px. If the content is larger, it may overflow.
    </p>

    <!-- ===================== -->
    <!-- Max-Width and Max-Height -->
    <!-- ===================== -->
    <h3>3. Max-Width and Max-Height</h3>
    <p>
      Use <code>max-width</code> and <code>max-height</code> to limit the size
      without strictly fixing it.
    </p>

    <div class="code-block"
         data-html="<div class='dim3'>Max width 400px</div>"
         data-css=".dim3 {
  max-width: 400px;
  padding: 12px;
  background: lightgreen;
  border: 1px solid #888;
}">

<pre><code>/* max-width example */
.dim3 {
  max-width: 400px;
  padding: 12px;
  background: lightgreen;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      The element can shrink smaller than 400px, but will never stretch wider than that.
    </p>

    <!-- ===================== -->
    <!-- Min-Width and Min-Height -->
    <!-- ===================== -->
    <h3>4. Min-Width and Min-Height</h3>
    <p>
      Use <code>min-width</code> and <code>min-height</code> to ensure a minimum size.
    </p>

    <div class="code-block"
         data-html="<div class='dim4'>Min width 250px</div>"
         data-css=".dim4 {
  min-width: 250px;
  min-height: 100px;
  background: lightgoldenrodyellow;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* min-width and min-height example */
.dim4 {
  min-width: 250px;
  min-height: 100px;
  padding: 12px;
  background: lightgoldenrodyellow;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p style="color: blue;">
      Tip: Min and Max dimension properties help make responsive layouts more flexible.
    </p>
  `
},

boxmodel: {
  title: "CSS Box Model",
  category: "Box Model",
  prev: "dimension",
  next: "display",
  content: `
    <h2>CSS Box Model</h2>

    <p>
      The CSS Box Model describes the design and layout of HTML elements.
      Every element is treated as a rectangular box, and it consists of: 
      <strong>content</strong>, <strong>padding</strong>, <strong>border</strong>, and <strong>margin</strong>.
    </p>

    <p style="color: blue;">
      Tip: Understanding the Box Model is essential for controlling layout and spacing in CSS.
    </p>

    <!-- CONTENT -->
    <h3>1. Content Area</h3>
    <p>
      This is the actual area where text and images appear.
    </p>

    <div class="code-block"
         data-html="<div class='box1'>Content only</div>"
         data-css=".box1 {
  background: #f8f9fa;
  padding: 0;
  border: none;
  margin: 0;
}">

<pre><code>/* content only */
.box1 {
  background: #f8f9fa;
}</code></pre>

    </div>

    <p>
      This box has only content without padding, border, or margin.
    </p>

    <!-- PADDING -->
    <h3>2. Padding</h3>
    <p>
      Padding adds space <strong>inside</strong> the element, around the content.
    </p>

    <div class="code-block"
         data-html="<div class='box2'>Padding only</div>"
         data-css=".box2 {
  padding: 20px;
  background: #e0f7fa;
}">

<pre><code>/* padding example */
.box2 {
  padding: 20px;
  background: #e0f7fa;
}</code></pre>

    </div>

    <p>
      Padding increases the space between the content and the border.
    </p>

    <!-- BORDER -->
    <h3>3. Border</h3>
    <p>
      The border sits between the padding and the margin.
    </p>

    <div class="code-block"
         data-html="<div class='box3'>Border only</div>"
         data-css=".box3 {
  border: 4px solid #00796b;
  padding: 12px;
}">

<pre><code>/* border example */
.box3 {
  border: 4px solid #00796b;
  padding: 12px;
}</code></pre>

    </div>

    <p>
      Borders wrap around the padding and content.
    </p>

    <!-- MARGIN -->
    <h3>4. Margin</h3>
    <p>
      Margin is the outermost layer that creates space between elements.
    </p>

    <div class="code-block"
         data-html="<div class='box4'>Margin only</div>"
         data-css=".box4 {
  margin: 30px;
  padding: 12px;
  background: #ffecb3;
  border: 2px solid #aaa;
}">

<pre><code>/* margin example */
.box4 {
  margin: 30px;
  padding: 12px;
  background: #ffecb3;
  border: 2px solid #aaa;
}</code></pre>

    </div>

    <p>
      Margin adds space outside the border, separating this element from others.
    </p>

    <!-- FULL BOX MODEL -->
    <h3>5. Full Box Model Example</h3>
    <p>
      A combined example showing content, padding, border, and margin.
    </p>

    <div class="code-block"
         data-html="<div class='full-box'>Full Box Model</div>"
         data-css=".full-box {
  margin: 20px;
  padding: 16px;
  border: 3px dotted #3e2723;
  background: #ffe0b2;
}">

<pre><code>/* full box model */
.full-box {
  margin: 20px;
  padding: 16px;
  border: 3px dotted #3e2723;
  background: #ffe0b2;
}</code></pre>

    </div>

    <p style="color: blue;">
      Note: You can inspect the box model in developer tools to see how each part contributes to the total size.
    </p>
  `
},

outline: {
  title: "CSS Outline",
  category: "Basics",
  prev: "boxmodel",
  next: "margin", // istersen kendi sırana göre değiştir
  content: `
    <h2>CSS Outline</h2>

    <p>
      The <code>outline</code> property draws a line around an element,
      outside the border. Unlike borders, outlines do <strong>not</strong>
      take up space, so they don't affect layout.
    </p>

    <p style="color: blue;">
      Tip: Outlines are often used for focus states (keyboard navigation).
    </p>

    <!-- ===================== -->
    <!-- 1) Basic outline -->
    <!-- ===================== -->
    <h3>1. Basic Outline</h3>
    <p>
      You can set outline width, style, and color using the shorthand:
      <code>outline: width style color;</code>
    </p>

    <div class="code-block"
         data-html="<div class='o1'>Outline example</div>"
         data-css=".o1 {
  padding: 16px;
  border: 2px solid #999;
  outline: 4px solid #04AA6D;
}">

<pre><code>/* outline shorthand */
.o1 {
  border: 2px solid #999;
  outline: 4px solid #04AA6D;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) Outline styles -->
    <!-- ===================== -->
    <h3>2. Outline Styles</h3>
    <p>
      Outline supports styles like <code>dotted</code>, <code>dashed</code>,
      <code>solid</code>, and <code>double</code>.
    </p>

    <div class="code-block"
         data-html="<div class='o2a'>dotted</div>
<div class='o2b'>dashed</div>
<div class='o2c'>double</div>"
         data-css=".o2a, .o2b, .o2c {
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #bbb;
}

.o2a { outline: 4px dotted #2563eb; }
.o2b { outline: 4px dashed #ea580c; }
.o2c { outline: 5px double #16a34a; }">

<pre><code>/* outline styles */
.o2a { outline: 4px dotted #2563eb; }
.o2b { outline: 4px dashed #ea580c; }
.o2c { outline: 5px double #16a34a; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) Outline offset -->
    <!-- ===================== -->
    <h3>3. Outline Offset</h3>
    <p>
      Use <code>outline-offset</code> to create space between the border and the outline.
    </p>

    <div class="code-block"
         data-html="<button class='o3'>Focus-like outline</button>"
         data-css=".o3 {
  padding: 12px 16px;
  border: 2px solid #111827;
  background: white;
  cursor: pointer;

  outline: 3px solid #3b82f6;
  outline-offset: 6px;
}">

<pre><code>/* outline-offset */
.o3 {
  outline: 3px solid #3b82f6;
  outline-offset: 6px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Note: Outline is drawn outside the border and does not change element size.
    </p>
  `
},

text: {
  title: "CSS Text",
  category: "Basics",
  prev: "outline",
  next: "fonts", // sende yoksa null yapabilirsin
  content: `
    <h2>CSS Text</h2>

    <p>
      CSS text properties are used to style and format text. You can control
      alignment, decoration, spacing, and even add effects like shadows.
    </p>

    <p style="color: blue;">
      Tip: The most common text properties are <code>color</code>, <code>text-align</code>,
      <code>text-decoration</code>, and <code>text-transform</code>.
    </p>

    <!-- ===================== -->
    <!-- 1) color -->
    <!-- ===================== -->
    <h3>1. Text Color</h3>
    <p>
      The <code>color</code> property sets the color of text.
    </p>

    <div class="code-block"
         data-html="<p class='t1'>This text is colored.</p>"
         data-css=".t1 { color: #e11d48; font-weight: 700; }">

<pre><code>/* text color */
.t1 {
  color: #e11d48;
  font-weight: 700;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) text-align -->
    <!-- ===================== -->
    <h3>2. Text Alignment</h3>
    <p>
      Use <code>text-align</code> to align text inside an element.
    </p>

    <div class="code-block"
         data-html="<p class='a1'>Left aligned</p>
<p class='a2'>Center aligned</p>
<p class='a3'>Right aligned</p>"
         data-css=".a1 { text-align: left; }
.a2 { text-align: center; }
.a3 { text-align: right; }">

<pre><code>/* text-align */
.a1 { text-align: left; }
.a2 { text-align: center; }
.a3 { text-align: right; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) text-decoration -->
    <!-- ===================== -->
    <h3>3. Text Decoration</h3>
    <p>
      <code>text-decoration</code> is often used to underline links or remove underlines.
    </p>

    <div class="code-block"
         data-html="<a class='d1' href='#'>Underlined link</a><br><br>
<a class='d2' href='#'>No underline</a><br><br>
<p class='d3'>Line-through text</p>"
         data-css=".d1 { text-decoration: underline; }
.d2 { text-decoration: none; color: #2563eb; font-weight: 600; }
.d3 { text-decoration: line-through; }">

<pre><code>/* text-decoration */
.d1 { text-decoration: underline; }
.d2 { text-decoration: none; }
.d3 { text-decoration: line-through; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 4) text-transform -->
    <!-- ===================== -->
    <h3>4. Text Transform</h3>
    <p>
      <code>text-transform</code> changes text case without editing the HTML.
    </p>

    <div class="code-block"
         data-html="<p class='tr1'>this will be uppercase</p>
<p class='tr2'>THIS WILL BE lowercase</p>
<p class='tr3'>this will be capitalized</p>"
         data-css=".tr1 { text-transform: uppercase; }
.tr2 { text-transform: lowercase; }
.tr3 { text-transform: capitalize; }">

<pre><code>/* text-transform */
.tr1 { text-transform: uppercase; }
.tr2 { text-transform: lowercase; }
.tr3 { text-transform: capitalize; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 5) spacing: indent, letter, word, line-height -->
    <!-- ===================== -->
    <h3>5. Text Spacing</h3>
    <p>
      You can control indentation and spacing using <code>text-indent</code>,
      <code>letter-spacing</code>, <code>word-spacing</code>, and <code>line-height</code>.
    </p>

    <div class="code-block"
         data-html="<p class='sp'>
This paragraph demonstrates spacing properties. It has an indent, larger letter spacing, larger word spacing, and comfortable line height.
</p>"
         data-css=".sp {
  text-indent: 30px;
  letter-spacing: 1px;
  word-spacing: 3px;
  line-height: 1.8;
}">

<pre><code>/* spacing */
.sp {
  text-indent: 30px;
  letter-spacing: 1px;
  word-spacing: 3px;
  line-height: 1.8;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 6) text-shadow -->
    <!-- ===================== -->
    <h3>6. Text Shadow</h3>
    <p>
      <code>text-shadow</code> adds shadow effects to text.
    </p>

    <div class="code-block"
         data-html="<h3 class='sh'>Shadow Text</h3>"
         data-css=".sh {
  font-size: 40px;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.35);
}">

<pre><code>/* text-shadow: x y blur color */
.sh {
  text-shadow: 2px 2px 6px rgba(0,0,0,0.35);
}</code></pre>

    </div>

    <p style="color: blue;">
      Mini recap: Use <code>text-align</code> for alignment, <code>text-decoration</code> for lines,
      and spacing properties to improve readability.
    </p>
  `
},

fonts: {
  title: "CSS Fonts",
  category: "Text",
  prev: "text",
  next: "text_align", // istersen sonraki dersi buna bağla
  content: `
    <h2>CSS Fonts</h2>

    <p>
      CSS font properties let you control the look and feel of text.
      You can choose font families, change font size, font weight, and more.
    </p>

    <p style="color: blue;">
      Tip: Using font stacks (multiple fonts) helps maintain design if one font is unavailable.
    </p>

    <!-- ===================== -->
    <!-- 1) font-family -->
    <!-- ===================== -->
    <h3>1. Font Family</h3>
    <p>
      The <code>font-family</code> property defines which font a text should use.
      You can give a list of fonts (a font stack).
    </p>

    <div class="code-block"
         data-html="<p class='ff1'>This uses Arial</p>
<p class='ff2'>This uses Georgia</p>
<p class='ff3'>This uses a fallback stack</p>"
         data-css=".ff1 { font-family: Arial, sans-serif; }
.ff2 { font-family: Georgia, serif; }
.ff3 { font-family: 'Comic Sans MS', cursive, sans-serif; }">

<pre><code>/* font-family examples */
.ff1 { font-family: Arial, sans-serif; }
.ff2 { font-family: Georgia, serif; }
.ff3 { font-family: 'Comic Sans MS', cursive, sans-serif; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) font-size -->
    <!-- ===================== -->
    <h3>2. Font Size</h3>
    <p>
      The <code>font-size</code> property sets the size of the text.
      You can use pixels, percentages, ems, rems, etc.
    </p>

    <div class="code-block"
         data-html="<p class='fs1'>Small text</p>
<p class='fs2'>Medium text</p>
<p class='fs3'>Large text</p>"
         data-css=".fs1 { font-size: 12px; }
.fs2 { font-size: 18px; }
.fs3 { font-size: 28px; }">

<pre><code>/* font-size examples */
.fs1 { font-size: 12px; }
.fs2 { font-size: 18px; }
.fs3 { font-size: 28px; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) font-weight -->
    <!-- ===================== -->
    <h3>3. Font Weight</h3>
    <p>
      The <code>font-weight</code> property sets the thickness of the text.
      Bold text uses larger font weight.
    </p>

    <div class="code-block"
         data-html="<p class='fw1'>Normal weight</p>
<p class='fw2'>Bold weight</p>"
         data-css=".fw1 { font-weight: 400; }
.fw2 { font-weight: 700; }">

<pre><code>/* font-weight examples */
.fw1 { font-weight: 400; }
.fw2 { font-weight: 700; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 4) line-height -->
    <!-- ===================== -->
    <h3>4. Line Height</h3>
    <p>
      The <code>line-height</code> property sets the spacing between lines of text.
    </p>

    <div class="code-block"
         data-html="<p class='lh'>This is a line-height example. Notice how spacing changes between lines compared to normal text. More space makes text easier to read.</p>"
         data-css=".lh { line-height: 1.8; font-size: 18px; }">

<pre><code>/* line-height example */
.lh { line-height: 1.8; font-size: 18px; }</code></pre>

    </div>

    <p style="color: blue;">
      Summary: Choose font family for style, font-size for size, font-weight for emphasis, and line-height for readability.
    </p>
  `
},

icons: {
  title: "CSS Icons",
  category: "Visual Styling",
  prev: "fonts",
  next: "text_align", // update to the next lesson you want
  content: `
    <h2>CSS Icons</h2>

    <p>
      CSS can be used to style icons as well as text. Many sites use icon fonts
      (like Font Awesome) or CSS generated content with Unicode icons.
    </p>

    <p style="color: blue;">
      Tip: Icons are usually text characters styled with CSS — this makes them scalable and flexible.
    </p>

    <!-- ===================== -->
    <!-- 1) Using Unicode Icons -->
    <!-- ===================== -->
    <h3>1. Using Unicode Icons</h3>
    <p>
      CSS can insert Unicode symbols using <code>content</code> and
      <code>:before</code> or <code>:after</code> pseudo-elements.
    </p>

    <div class="code-block"
         data-html="<p class='icon-star'>Star icon example</p>"
         data-css=".icon-star:before {
  content: '\\2605'; /* ★ Unicode star */
  color: gold;
  font-size: 24px;
  margin-right: 8px;
}">

<pre><code>/* CSS with Unicode icon */
.icon-star:before {
  content: '\\2605'; /* ★ */
  color: gold;
  font-size: 24px;
  margin-right: 8px;
}</code></pre>

    </div>

    <p>
      The Unicode <code>\\2605</code> code produces a star symbol ★ before the text.
    </p>

    <!-- ===================== -->
    <!-- 2) Icon Fonts (Example) -->
    <!-- ===================== -->
    <h3>2. Icon Fonts Example</h3>
    <p>
      Many libraries like Font Awesome provide icons as font characters. You add
      the library and use classes to display icons.
    </p>

    <div class="code-block"
         data-html="<!-- Link to Font Awesome (this must be included) -->
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'>
<p class='fa-icon'><i class='fas fa-heart'></i> Heart Icon</p>"
         data-css=".fa-icon i {
  color: crimson;
  font-size: 28px;
  margin-right: 6px;
}">

<pre><code>&lt;!-- HTML --&gt;
&lt;link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'&gt;
&lt;p class='fa-icon'&gt;&lt;i class='fas fa-heart'&gt;&lt;/i&gt; Heart Icon&lt;/p&gt;

/* CSS */
.fa-icon i {
  color: crimson;
  font-size: 28px;
  margin-right: 6px;
}</code></pre>

    </div>

    <p>
      This example uses a linked icon font. When added to a real page, the
      heart icon displays next to the text.
    </p>

    <!-- ===================== -->
    <!-- 3) CSS Shape Icons -->
    <!-- ===================== -->
    <h3>3. CSS Shape Icons</h3>
    <p>
      You can create simple shape “icons” using only CSS and borders/backgrounds.
    </p>

    <div class="code-block"
         data-html="<div class='css-circle'></div>"
         data-css=".css-circle {
  width: 32px;
  height: 32px;
  background: orange;
  border-radius: 50%; /* makes circle */
}">

<pre><code>/* Simple CSS circle icon */
.css-circle {
  width: 32px;
  height: 32px;
  background: orange;
  border-radius: 50%;
}</code></pre>

    </div>

    <p style="color: blue;">
      CSS alone can produce simple shape icons such as circles, squares, or even triangles with clever use of borders.
    </p>
  `
},

links: {
  title: "CSS Links",
  category: "Text",
  prev: "fonts",
  next: "text_shadow",
  content: `
    <h2>CSS Links</h2>

    <p>
      In CSS, you can style hyperlinks (<code>&lt;a&gt;</code> elements) to change how they look in different states,
      such as normal, hovered, clicked (active), and visited.
    </p>

    <p style="color: blue;">
      Tip: The order of link pseudo-classes is important: <code>:link → :visited → :hover → :active</code>.
    </p>

    <!-- ===================== -->
    <!-- 1) Link Colors -->
    <!-- ===================== -->
    <h3>1. Link Colors</h3>
    <p>
      You can change link colors in different states using CSS pseudo-classes.
    </p>

    <div class="code-block"
         data-html="<p>
  <a href='#' class='ln1'>Normal link</a><br>
  <a href='#' class='ln2 visited'>Visited link</a><br>
  <a href='#' class='ln3'>Hover me</a><br>
  <a href='#' class='ln4'>Click me</a>
</p>"
         data-css="a.ln1 { color: blue; }
a.ln2:visited { color: purple; }
a.ln3:hover { color: orange; }
a.ln4:active { color: red; }">

<pre><code>/* link states */
a.ln1 { color: blue; }
a.ln2:visited { color: purple; }
a.ln3:hover { color: orange; }
a.ln4:active { color: red; }</code></pre>

    </div>

    <p>
      Here we show link colors in each state:
      - <strong>Normal</strong> (ln1),
      - <strong>Visited</strong> (ln2),
      - <strong>Hover</strong> (ln3),
      - <strong>Active/Clicked</strong> (ln4).
    </p>

    <!-- ===================== -->
    <!-- 2) Text Decoration -->
    <!-- ===================== -->
    <h3>2. Text Decoration</h3>
    <p>
      You can remove or change underlines and other decorations on links.
    </p>

    <div class="code-block"
         data-html="<p>
  <a href='#' class='dec1'>Underlined link</a><br>
  <a href='#' class='dec2'>No underline</a>
</p>"
         data-css="a.dec1 { text-decoration: underline; }
a.dec2 { text-decoration: none; color: teal; }">

<pre><code>/* text-decoration */
a.dec1 { text-decoration: underline; }
a.dec2 { text-decoration: none; color: teal; }</code></pre>

    </div>

    <p>
      Use <code>text-decoration</code> to control underlines, overlines, or remove them completely.
    </p>

    <!-- ===================== -->
    <!-- 3) Font Weight & Hover -->
    <!-- ===================== -->
    <h3>3. Font Weight & Hover Styles</h3>
    <p>
      You can also change font weight, background, etc., when hovering over a link.
    </p>

    <div class="code-block"
         data-html="<p>
  <a href='#' class='hw1'>Hover Style Example</a>
</p>"
         data-css="a.hw1 {
  color: #444;
  font-weight: 400;
  padding: 4px;
}
a.hw1:hover {
  color: white;
  background: #444;
  font-weight: 600;
}">

<pre><code>/* hover with decoration */
a.hw1 {
  color: #444;
  font-weight: 400;
  padding: 4px;
}
a.hw1:hover {
  color: white;
  background: #444;
  font-weight: 600;
}</code></pre>

    </div>

    <p style="color: blue;">
      Summary: Use pseudo-classes like <code>:hover</code> and <code>:active</code> to make links interactive and visually responsive.
    </p>
  `
},



    "flexbox": {
        title: "Flexbox Layout",
        category: "Layout",
        prev: "boxmodel",
        next: "grid",
        content: `
            <p class="lead">The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container.</p>
            
            <h2>Flex Container</h2>
            <p>To start using the Flexbox model, you need to first define a flex container.</p>
            <div class="code-block">
.container {
  display: flex;
  justify-content: center;
}
            </div>
        `
    },

    "grid": {
        title: "CSS Grid Layout",
        category: "Layout",
        prev: "flexbox",
        next: null,
        content: `
            <p>CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer.</p>
            <p>Like tables, grid layout enables an author to align elements into columns and rows.</p>
             <div class="code-block">
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}
            </div>
        `
    }
};