# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

r1 = Restaurant.create(:name => 'Delfina', :locu_id => 'ad4f19b42cb9b1d61336', :phone => '4155524055', :url => 'http://www.delfinasf.com')
r2 = Restaurant.create(:name => 'NOPA', :locu_id => 'daea756ba298a8fa8ad5', :phone => '4158648643', :url => 'http://www.nopasf.com')
r3 = Restaurant.create(:name => 'Zuni Cafe', :locu_id => '896a8d59b03aca35fc5e', :phone => '4155522522', :url => 'http://www.zunicafe.com')
r4 = Restaurant.create(:name => 'Pizzeria Delfina California St.', :locu_id => 'd73f6f881f14fc194632', :phone => '4154376800', :url => 'http://www.pizzeriadelfina.com/pacificHeights.html')
r5 = Restaurant.create(:name => 'Pizzeria Delfina 18th St.', :locu_id => 'fa2e03cf0cb01c634ccd', :phone => '4154401189', :url => 'http://www.pizzeriadelfina.com')
r6 = Restaurant.create(:name => 'Cotogna', :locu_id => 'a8c2654cd9eeb2a3631c', :phone => '4157758508', :url => 'http://www.cotognasf.com')
r7 = Restaurant.create(:name => 'Kokkari', :locu_id => '667ab948001be300a865', :phone => '4159810983', :url => 'http://www.kokkari.com')
r8 = Restaurant.create(:name => 'Chez Panisse', :locu_id => 'da29040a50a9634a28a7', :phone => '5105485525', :url => 'http://www.chezpanisse.com')
r9 = Restaurant.create(:name => 'OTD Bush St', :locu_id => '43b7a12add4f723610af', :phone => '4159239575', :url => 'http://www.outthedoors.com')
r10 = Restaurant.create(:name => 'Frances', :locu_id => '93db23c47cdc569c61c4', :phone => '4156213870', :url => 'http://www.frances-sf.com')