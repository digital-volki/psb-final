package rest

import (
	"github.com/gorilla/mux"
	"net/http"
	"psbBot/handlers/rest/ping"
)

func NewMux() *mux.Router {
	router := mux.NewRouter()

	router.Handle("/ping", ping.Handler()).Methods(http.MethodGet)

	return router
}
