const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
    <label for="authorname" class="col-sm-2 control-label">AUTHOR NAME</label>
    <div class="col-sm-10">
      <input id="authorname" name="authorname" type="text" class="form-control"/>
    </div></div>
    
    <div class="form-group">
    <label for="authoremail" class="col-sm-2 control-label">AUTHOR EMAIL</label>
    <div class="col-sm-10">
      <input id="authoremail" name="authoremail" type="text" class="form-control"/>
    </div></div>
    
    <div class="form-group">
      <label for="pagetitle" class="col-sm-2 control-label">PAGE TITLE</label>
      <div class="col-sm-10">
        <input id="pagetitle" name="pagetitle" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
    <label for="content" class="col-sm-2 control-label">CONTENT</label>
    <div class="col-sm-10">
      <input id="content" name="content" type="textarea" class="form-control"/>
    </div></div>
    
    <div class="form-group">
    <label for="pagestatus" class="col-sm-2 control-label">PAGE STATUS</label>
    <div class="col-sm-10">
      <input id="pagestatus" name="pagestatus" type="text" class="form-control"/>
    </div></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);