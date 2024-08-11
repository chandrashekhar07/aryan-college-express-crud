import User from "./users.js";
import Department from "./department.js";

Department.hasMany(User,{
    onDelete:"CASCADE",
    
});

User.belongsTo(Department);



console.log("Relationship between user and department has been set")
