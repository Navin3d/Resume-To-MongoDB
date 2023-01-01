const mongoose = require("mongoose");
const { DATABASE_URL } = require("./Config");
// const UserModel = require("../models/User-Model");
// const SkillModel = require("../models/Skill-Model");


// const connectDB = async () => {
//     if (mongoose.connection.readyState == 0) { 
//         await mongoose 
//           .connect(DATABASE_URL) 
//           .then(() => console.log('Database Connected!')) 
//           .catch(err => {
//             if (err) console.log(`Error in connecting DB: ${err}`); 
//           }); 
//       } 
// }

// class User {
//     constructor(data) {
//         if (!data._id) { 
//             data._id = mongoose.Types.ObjectId(); 
//         } 
//         this._id = data._id; 
//         this.firstName = data.firstName;
//         this.lastName = data.lastName;
//         this.mobileNumber = data.mobileNumber;
//         this.email = data.email;
//         this.summary = data.summary;
//         this.experience = data.experience;
//         this.education = data.education;
//         this.licenseAndCertification = data.licenseAndCertification;
//         this.links = data.links;
//     }
//     toJson() { 
//         return { 
//           _id: this._id,
//           firstName: this.firstName,
//           lastName: this.lastName,
//           mobileNumber: this.mobileNumber,
//           email: this.email,
//           summary: this.summary, 
//           experience: this.experience,
//           education: this.education,
//           licenseAndCertification: this.licenseAndCertification,
//           links: this.links
//         }; 
//       }       
//     get id() { 
//         return this._id; 
//     }
//     async save() { 
//         await connectDB(); 
//         UserModel.findById(this._id, (err, docs) => { 
//           if (!docs) { 
//             const User = new UserModel(this.toJson()); 
//             User 
//               .save() 
//               .then(User => {}) 
//               .catch(err => console.log('Error in saving document')); 
//           } else { 
//               UserModel.findOneAndUpdate({ _id: docs._id }, this.toJson()) 
//               .then(User => {}) 
//               .catch(err => console.log('Error in Saving Document ')); 
//           } 
//         }); 
//         return this; 
//       } 

//       static async find() { 
//         await connectDB(); 
//         const arr = []; 
//         await UserModel.find().then(Users => { 
//           Users.map(User => { 
//             arr.push(new User(User)); 
//           }); 
//         }); 
//         return arr; 
//       } 

//       static async findOne(searchCondition) { 
//         await connectDB(); 
//         let user = null; 
//         await UserModel.find(searchCondition) 
//           .then(result => { 
//             if (result) User = result[0];
//           }) 
//           .catch(err => { 
//             if (err) console.log(`Error in FindOne User: ${err}`); 
//             return null; 
//           }); 
//         return new User(user); 
//       } 

//       static async remove(searchCondition) { 
//         await connectDB(); 
//         await UserModel.deleteOne(searchCondition) 
//           .then(User => {}) 
//           .catch(err => console.log('Error in User Remove')); 

//         return undefined; 
//       } 
// }

// class Skill {
//     constructor(data) {
//         if (!data._id) { 
//             data._id = mongoose.Types.ObjectId(); 
//         } 
//         this._id = data._id;
//         this.title = data.title;
//         this.description = data.description;
//         this.users = data.users;
//     }
//     toJson() { 
//         return { 
//           _id: this._id,
//           title: this.title,
//           description: this.description,
//           users: this.users
//         }
//     }
//     get id() { 
//         return this._id; 
//     }
//     async save() { 
//         await connectDB(); 
//         SkillModel.findById(this._id, (err, docs) => { 
//           if (!docs) { 
//             const Skill = new SkillModel(this.toJson()); 
//             Skill 
//               .save() 
//               .then(Skill => {}) 
//               .catch(err => console.log('Error in saving document')); 
//           } else { 
//             SkillModel.findOneAndUpdate({ _id: docs._id }, this.toJson()) 
//               .then(Skill => {}) 
//               .catch(err => console.log('Error in Saving Document ')); 
//           } 
//         });
//         return this; 
//       } 

//       static async find() { 
//         await connectDB(); 
//         const arr = []; 
//         await SkillModel.find().then(Skills => { 
//           Skills.map(Skill => { 
//             arr.push(new Skill(Skill)); 
//           }); 
//         }); 
//         return arr; 
//       } 

//       static async findOne(searchCondition) { 
//         await connectDB(); 
//         let Skill = null; 
//         await SkillModel.find(searchCondition) 
//           .then(result => { 
//             if (result) Skill = result[0];
//           }) 
//           .catch(err => { 
//             if (err) console.log(`Error in FindOne Skill: ${err}`); 
//             return null; 
//           }); 
//         return new Skill(Skill); 
//       } 

//       static async remove(searchCondition) { 
//         await connectDB(); 
//         await SkillModel.deleteOne(searchCondition) 
//           .then(Skill => {}) 
//           .catch(err => console.log('Error in Skill Remove')); 

//         return undefined; 
//     }
// }

// User.dbKey = 'users';
// Skill.dbKey = "skills";

async function main() {
  await mongoose.connect(DATABASE_URL)
}

main().then(() => {
  console.log(`=====> ESTABLISHED CONNECTION TO DB SUCCESSFULLY <======`);
}).catch((err) => {
  console.error(`=====> ERROR ESTABLISHING CONNECTION TO DB <======`);
  console.log(err)
})

module.exports = mongoose;
