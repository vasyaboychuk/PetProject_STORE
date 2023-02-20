module.exports = {
    getAllUsers: async (req, res, next) => {
        try {

            next();
        } catch (e) {
            next(e);
        }

    },
    createUser:async(req,res,next)=>{
    try{

        next();
     }catch(e){
       next(e);
     }

    },
    getUserById: async (req, res, next) => {
        try {

            next();
        } catch (e) {
            next(e);
        }

    },
    updateUser: async (req, res, next) => {
        try {

            next();
        } catch (e) {
            next(e);
        }

    },
    deleteUserById: async (req, res, next) => {
        try {

            next();
        } catch (e) {
            next(e);
        }

    }
}