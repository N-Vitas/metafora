package admin

import (
	"metafora-bot-service/webapp"
	"net/http"
)

// NewAdminInterface Веб интерфейс администратора
func NewAdminInterface() {
	fs := http.FileServer(http.Dir("./admin/build"))
	http.Handle("/admin/", http.StripPrefix("/admin/", fs))
	static := http.FileServer(http.Dir("./admin/build/static"))
	http.Handle("/static/", http.StripPrefix("/static/", static))
	webapp.Notice("Интерфейс администратора запущен по пути %s", "/admin")
}
