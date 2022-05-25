module.exports = function(app, materials){
    app.route("/material")
    .get(function(req,res){
        res.status(200).json(materials);
    })
    .post(function(req,res){
        var objectFromRequest = {
            name: req.body.name,
            cost: req.body.cost,
            id: getMaterialId(materials)
        }
        materials.push(objectFromRequest);
        res.status(200).json(materials);
    })
    .put(function(req,res){
         var index = getMaterialIndexById(materials,req.body.id)
         if(index==null){
            return res.status(404).json(false);
         }
         materials[index].name = req.body.name;
         materials[index].cost = req.body.cost;
         res.status(200).json(materials[index]);
    })
    .delete(function(req,res){
        console.log("Trying to delete material with id:" + req.body.id);
        var index = getMaterialIndexById(materials,req.body.id)
        if(index==null){
           return res.status(404).json(false);
        }
        materials.splice(index,1);
        res.status(200).json(materials);
    })
}

function getMaterialId(materials){
    var result = 1;
    materials.forEach(function(item, index){
        if(item.id>result){
            result = item.id;
        }
    });
   return ++result;
}

function getMaterialIndexById(materials, id){
    var result = null;
    materials.forEach(function(item,index){
        if(item.id == id){
            result = index;
            return;
        }
    })
    console.log("Deleting material with id:" + result);
    return result;
}