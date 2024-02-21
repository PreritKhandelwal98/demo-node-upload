const Product = require('../models/product');

const getAllDetails = async(req,resp)=>{

    const {company,name,featured,sort,select} =req.query;
    const queryObject={};

    if(company){
        queryObject.company=company;
        //console.log(queryObject.company);
    }
    if(featured){
        queryObject.featured=featured;
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }

    let apiData = Product.find(queryObject);
    if(sort){
        let sortFix = sort.replace(","," ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page-1)*limit;

    apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject);
    const myData = await apiData;
    resp.status(200).json({myData,nbHits:myData.length});
};

const getAllDetailsTesting = async(req,resp)=>{
    const myData = await Product.find(req.query).select("name");
    resp.status(200).json({myData});
};

module.exports = {getAllDetails,getAllDetailsTesting};