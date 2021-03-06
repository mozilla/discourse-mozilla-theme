api.reopenWidget('header-buttons', {
  html(attrs) {
    if (this.currentUser) { return }
    return this.attach('button', { contents: api.h('span.d-button-label', I18n.t('log_in') + " / " + I18n.t('sign_up')),
                                   className: 'btn-primary btn-small login-button',
                                   action: 'showLogin',
                                   icon: 'user' })
  }
})

api.replaceIcon('search', 'feather-search');
api.replaceIcon('bars', 'feather-menu');
api.replaceIcon('link', 'feather-link-2');
api.replaceIcon('pencil', 'feather-edit-2');
api.replaceIcon('pencil-alt', 'feather-edit-2');
api.replaceIcon('flag', 'feather-flag');
api.replaceIcon('bookmark', 'feather-bookmark');
api.replaceIcon('wrench', 'feather-sliders');
api.replaceIcon('ellipsis-h', 'feather-more-horizontal');
api.replaceIcon('reply', 'feather-corner-up-left');
api.replaceIcon('plus', 'feather-plus');
api.replaceIcon('user', 'feather-user');
api.replaceIcon('cog', 'feather-settings');
api.replaceIcon('lock', 'feather-lock');
api.replaceIcon('envelope', 'feather-mail');
api.replaceIcon('comment', 'feather-message-square');
api.replaceIcon('certificate', 'feather-award');
api.replaceIcon('sign-out-alt', 'feather-log-out');
api.replaceIcon('shield-alt', 'feather-shield');
api.replaceIcon('list', 'feather-list');
api.replaceIcon('times', 'feather-x');
api.replaceIcon('check', 'feather-check');
api.replaceIcon('share', 'feather-corner-up-right');
api.replaceIcon('far-comment', 'feather-message-square');
api.replaceIcon('bold', 'feather-bold');
api.replaceIcon('italic', 'feather-italic');
api.replaceIcon('discourse-expand', 'feather-maximize-2');
api.replaceIcon('discourse-compress', 'feather-minimize-2');
api.replaceIcon('chevron-down', 'feather-chevron-down');
api.replaceIcon('map-marker-alt', 'feather-map-pin');
api.replaceIcon('globe', 'feather-globe');
api.replaceIcon('user-plus', 'feather-user-plus');
api.replaceIcon('clock-o', 'feather-clock');
api.replaceIcon('heart', 'feather-heart');
api.replaceIcon('eye', 'feather-eye');
api.replaceIcon('far-eye-slash', 'feather-eye-off');
api.replaceIcon('users', 'feather-users');
api.replaceIcon('bar-chart', 'feather-bar-chart-2');
api.replaceIcon('chevron-up', 'feather-chevron-up');
api.replaceIcon('angle-double-down', 'feather-chevrons-down');
api.replaceIcon('angle-double-up', 'feather-chevrons-up');
api.replaceIcon('far-bell', 'feather-bell');
api.replaceIcon('far-bell-slash', 'feather-bell-off');
api.replaceIcon('user-times', 'feather-user-x');
api.replaceIcon('external-link-alt', 'feather-external-link');
api.replaceIcon('caret-right', 'feather-chevron-right');
api.replaceIcon('caret-left', 'feather-chevron-left');
api.replaceIcon('caret-down', 'feather-chevron-down');
api.replaceIcon('caret-up', 'feather-chevron-up');
api.replaceIcon('unlink', 'feather-link');
api.replaceIcon('exclamation-circle', 'feather-alert-circle')
