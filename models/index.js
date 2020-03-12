const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed'),
        defaultValue: "closed"
    }
})

function slugGenerator(title){
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

Page.beforeValidate((pageInstance, optionsObject) => {
    pageInstance.slug = slugGenerator(pageInstance.title);
    // console.log(pageInstance.slug);
});

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    }
})

Page.belongsTo(User, { as: 'author' });


module.exports = { db, User, Page }