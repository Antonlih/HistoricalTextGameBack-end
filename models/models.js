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
    lastPage: {type: DataTypes.INTEGER},
})

const Page = sequelize.define('page', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.STRING, allowNull: false},
    imageDescription: {type: DataTypes.STRING},
})

const Action = sequelize.define('action', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    option: {type: DataTypes.STRING},
    score: {type: DataTypes.INTEGER},

})

const Effect = sequelize.define('effect', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    effect: {type: DataTypes.STRING},
    effectImage: {type: DataTypes.STRING},
    imageDescription: {type: DataTypes.STRING},
    endGame: {type: DataTypes.STRING} // 0 или 1
})

const Term = sequelize.define('term', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    term: {type: DataTypes.STRING},
    meaning: {type: DataTypes.STRING}
})

const Font = sequelize.define('font', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    font: {type: DataTypes.STRING}
})

const Style = sequelize.define('style', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    style: {type: DataTypes.STRING}
})

User.hasOne(UserProgress)
UserProgress.belongsTo(User)

Action.hasOne(Effect)
Effect.belongsTo(Action)

Page.hasMany(Action)
Action.belongsTo(Page)

module.exports = {
    User,
    UserProgress,
    Page,
    Font,
    Style,
    Effect,
    Action,
    Term
}