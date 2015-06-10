console.log("Loading JSON...");
$.getJSON("_portfolio/posts.json", function(json)
{
  console.log("Posts Loaded, Building HTML...");
  console.log(json);
  console.log("Done.");
});
