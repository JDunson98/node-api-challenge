const express = require('express');
const projectDb = require('./data/helpers/projectModel');
const actionDb = require('./data/helpers/actionModel');

const router = express.Router();

// Getting Projects
router.get("/projects", (req, res) => {
    projectDb.get(req.params.id)
                .then((project) => {
                    if(project) {
                        res.status(200).json(project)
                    }
                })
                .catch((error) => {
                    next(error)
                })
});

// Getting Specific Project
router.get("/projects/:id", (req, res) => {
    projectDb.get(req.params.id)
                .then((project) => {
                    if(project) {
                        res.status(200).json(project)
                    }
                })
                .catch((error) => {
                    next(error)
                })
});

// Getting Project Actions
router.get("/projects/:id/actions", (req, res) => {
    projectDb.getProjectActions(req.params.id)
                .then((actions) => {
                    res.status(200).json(actions)
                })
                .catch((error) => {
                    next(error)
                })
});

// Getting Specific Project Action
router.get("/projects/:id/actions/:id", (req, res) => {
    actionDb.get(req.params.id)
                .then((action) => {
                    if(action) {
                        res.status(200).json(action)
                    }
                })
                .catch((error) => {
                    next(error)
                })
})

// Creating New Project
router.post("/projects", (req, res) => {
    projectDb.insert(req.body)
                .then((project) => {
                    res.status(201).json(project)
                })
                .catch((error) => {
                    next(error)
                })
}); 

//Creating New Action
router.post("/projects/:id/actions", (req, res) => {
    req.body.project_id = req.params.id
    actionDb.insert(req.body)
            .then((actions) => {
                res.status(201).json(actions)
            })
            .catch((error) => {
                next(error)
            })
});


//Updating Existing Project
router.put("/projects/:id", (req, res) => {
    projectDb.update(req.params.id, req.body)
                .then((project) => {
                    res.status(201).json(project)
                })
                .catch((error) => {
                    next(error)
                })
})

//Updating Existing Action
router.put("/projects/:id/actions/:id", (req, res) => {
    actionDb.update(req.params.id, req.body)
                .then((action) => {
                    res.status(201).json(action)
                })
                .catch((error) => {
                    next(error)
                })
})

//Deleting A Project
router.delete("/projects/:id", (req, res) => {
    projectDb.remove(req.params.id)
                .then((project) => {
                    res.status(200).json(project)
                })
                .catch((error) => {
                    next(error)
                })
})

//Deleting An Action
router.delete("/projects/:id/actions/:id", (req, res) => {
    actionDb.remove(req.params.id)
                .then((action) => {
                    res.status(200).json(action)
                })
                .catch((error) => {
                    next(error)
                })
});

module.exports = router;