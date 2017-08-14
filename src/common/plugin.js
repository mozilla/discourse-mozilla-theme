api.reopenWidget('header-buttons', {
  html(attrs) {
    if (this.currentUser) { return }
    return this.attach('button', { contents: api.h('span.d-button-label', I18n.t('log_in') + " / " + I18n.t('sign_up')),
                                   className: 'btn-primary btn-small login-button',
                                   action: 'showLogin',
                                   icon: 'user' })
  }
})
