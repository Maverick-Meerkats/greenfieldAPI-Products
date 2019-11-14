const sequelize = require("../index.js");

module.exports = {
  getStyles: id => {
    return sequelize.query(`SELECT json_build_object(
      'style_id', s.id,
      'name', s.name,
      'original_price', s.original_price,
      'sale_price', s.sale_price,
      'default?', s.default_style,
      'photos', coalesce((
      SELECT json_agg(result)::jsonb as photos FROM 
    (select photos.url, photos.thumbnail_url from photos where "styleId"=s.id)result
      )),
      'skus', coalesce((
        SELECT json_agg(json_build_object(sk.size, sk.quantity)) from skus sk where styleid=s.id
      ))
    ) as style from styles s where productid=
     ${id}`);
  }
};

// SELECT s.id as style_id, s.name, s.sale_price, s.original_price, s.default_style,
// json_agg(json_build_object('thumbnail_url', p.thumbnail_url, 'url',p.url)) as photos,
// json_agg(json_build_object(sk.size, sk.quantity))as skus from styles s
// INNER JOIN photos p ON s.id = p."styleId"
// INNER JOIN skus sk ON s.id = sk.styleid where s.id=2 GROUP BY s.id;
