const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const UserProgress = sequelize.define('userProgress', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    scores: {type: DataTypes.INTEGER},
    lastMove: {type: DataTypes.INTEGER},
})

const Move = sequelize.define('move', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
    action: {type: DataTypes.INTEGER, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    term: {type: DataTypes.STRING},
})

const Action = sequelize.define('action', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    option: {type: DataTypes.STRING},
    score: {type: DataTypes.INTEGER},
})

const Term = sequelize.define('term', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    term: {type: DataTypes.STRING},
    meaning: {type: DataTypes.STRING}
})

User.hasOne(UserProgress)
User.belongsTo(User)

Move.hasMany(Action)
Action.belongsTo(Move)

module.exports = {
    User,
    UserProgress,
    Move,
    Action,
    Term
}