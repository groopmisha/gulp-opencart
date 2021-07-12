<h1>Compile frontend with npm and gulp <br><span>incremental build, which compile only changed files</span></h1>
<h2>Run gulp</h2>
<h3>Run <code>npm i</code> in project root directory for install gulp and packages, after that you can easily run compiling with these commands</h3>
<ol>
   <li>Run <code>gulp</code> just for single compiling files (css)</li>
   <li>Run <code>gulp watch</code> for working with files (compile every changes and show live results in browser) <span> You should have any local server (open server, vs code live server, etc</span></li>
   <li>Run <code>gulp scripts</code> just for single compiling files (scripts)</li>
   <li>Run <code>gulp assets</code> just for single compiling files (scripts & styles)</li>
</ol>
<p>* For start working you should have <span>node</span> already installed on your windows. Run <code>node --version</code> to command line for check node version</p>
<p>* Required files: <code>gulpfile.js, package.json, package-lock.json</code></p>
<hr>
<h2>Setup gulp (clear version)</h2>
<ol>
   <li>Open command line and install npm with gulp globally <code>npm install --global gulp-cli</code></li>
   <li>Open project folder and run <code>npm init</code> for create package.json file</li>
   <li>Open project folder and install gulp <code>npm install --gulp --save-dev</code></li>
   <li>Open project folder and install packages
      <code>
         npm i sass gulp-sass browser-sync gulp-file-include gulp-autoprefixer gulp-group-css-media-queries gulp-rename gulp-clean-css gulp-uglify-es gulp-babel gulp-concat gulp-cached gulp-dependents gulp-debug  --save-dev
      </code>
   </li>
</ol>
<p>If you have permission-denied error, you should run <code>Set-ExecutionPolicy RemoteSigned</code> in windows powerhell terminal</p>
<p>If you have other errors, you should run <code>npm cache clean --force</code> and reinstall npm. For delete node modules folder use <code>rm -r node_modules</code></p>
<hr>
<p>If you have any questions or suggestions, I will be happy to answer: <a href="mailto:misha.groop@gmail.com">misha.groop@gmail.com</a></p>

