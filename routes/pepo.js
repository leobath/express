
/*
 * GET pepo page.
 */

exports.index = function(req, res){
  res.render('pepo', { title: 'pepo: Express Web Application' });
};
