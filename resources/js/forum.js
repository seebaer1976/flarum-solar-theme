import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import m from 'mithril';

app.initializers.add('solar-theme', () => {

  extend(IndexPage.prototype, 'view', function (vdom) {

    if (!vdom) return;

    const stats = app.forum?.data?.attributes || {};

    const users = stats.usersCount || 0;
    const posts = stats.postsCount || 0;
    const discussions = stats.discussionsCount || 0;
    const online = Math.floor(users * 0.1);

    const dashboard = m('div.solar-dashboard', [
      m('div.solar-card', `👥 ${users} Users`),
      m('div.solar-card', `💬 ${discussions} Topics`),
      m('div.solar-card', `📝 ${posts} Posts`),
      m('div.solar-card.glow', `🟢 ${online} Online`)
    ]);

    if (vdom.children && Array.isArray(vdom.children)) {
      vdom.children.push(dashboard);
    }

  });

});
