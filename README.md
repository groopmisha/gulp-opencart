<h1>Compile frontend with npm and gulp <br><span>incremental build, which compile only changed files</span></h1>
<h2>Setup gulp</h2>
<ol>
   <li>Delete previously installed gulp <code>npm rm --global gulp</code></li>
   <li>Install gulp globally <code>npm install --global gulp-cli</code></li>
   <li>Open project folder and run <code>npm init</code> for create package.json file (if file not exist!)</li>
   <li>Install gulp locally <code>npm install gulp --save-dev </code></li>
   <li>Install packages
      <code>
         npm i sass gulp-sass browser-sync gulp-file-include gulp-autoprefixer gulp-group-css-media-queries gulp-rename gulp-clean-css gulp-uglify-es gulp-babel gulp-concat gulp-cached gulp-dependents gulp-debug  --save-dev
      </code>
   </li>
   <li>Check <code>gulp --version</code></li>
   <li>Install packages depencency, if errors like "not found modules @babel/core" <code>npm i @babel/core --save-dev </code></li>
</ol>
<p>If you have permission-denied error, you should run <code>Set-ExecutionPolicy RemoteSigned</code> in windows powerhell terminal</p>
<p>If you have other errors, you should run <code>npm cache clean --force</code> and reinstall npm. For delete node modules folder use <code>rm -r node_modules</code></p>
<p>* For start working you should have <span>node</span> already installed on your windows. Run <code>node --version</code> to command line for check node version</p>
<p>* Required files: <code>gulpfile.js, package.json, package-lock.json</code></p>
<hr>
<h2>Run gulp with commands:</h2>
<ol>
   <li><code>gulp</code> (compile sass to css)</li>
   <li><code>gulp watch</code> (compile every changes and show live results in browser) <span> You should have any local server (open server, vs code live server, etc</span></li>
   <li><code>gulp scripts</code> (compile only scripts)</li>
   <li><code>gulp assets</code> (compile scripts & styles)</li>
</ol>
<p>* Run <code>npm i</code> in project root directory if you have any errors for update npm</p>
<hr>

<p>If you have any questions or suggestions, I will be happy to answer: <a href="mailto:misha.groop@gmail.com">misha.groop@gmail.com</a></p>

