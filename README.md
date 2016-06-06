# Exporter
Exporter
# Documentation
Run these commands to set up the Exporter:
```bash
git clone https://github.com/lakshitha212/Exporter
cd Exporter
npm install
bower install
grunt wiredep
```
# How do I use it?
First include to page exporter.js file

```bash
<!-- this should go after your </body> -->
<script src="js/exporter.js"></script>
```
# Example
HTML
```bash
<div class="container">
  <div id="content_tbl">
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>First Name 1</td>
            <td>Second Name 1</td>
            <td>City 1</td>
            <td>Country 1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>First Name 2</td>
            <td>Second Name 2</td>
            <td>City 2</td>
            <td>Country 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```
javaScript
```bash
 $('body').exporter({
    _id: "content_tbl",//container id
    _align: "text-right",//display
    _type: [1, 2],//1=> EXL , 2=> PDF
    _file: "Report"//File name xls
  });
```

