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
