<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="#" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat">
                  <i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li class="active treeview menu-open">
          <router-link to="/">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
              <span class="pull-right-container">
            </span>
          </router-link>
        </li>
        <li class="treeview">
          <router-link to="/pemasukan">
            <i class="fa fa-files-o"></i>
            <span>Pemasukan</span>
              <span class="pull-right-container">
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/pengeluaran">
            <i class="fa fa-th"></i> <span>Penegeluaran</span>
            <span class="pull-right-container">

            </span>
          </router-link>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Report</span>
            <span class="pull-right-container">
            </span>
          </a>
        </li>   
        <li class="treeview">
           <router-link to="/user">
            <i class="fa fa-share"></i> <span>User</span>
            <span class="pull-right-container">

            </span>
          </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'nav',
}
</script>