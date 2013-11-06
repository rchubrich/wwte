# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

r1 = Restaurant.create(:name => 'Delfina', :locu_id => 'ad4f19b42cb9b1d61336', :phone => '4155524055', :url => 'http://www.delfinasf.com', :address => '3621 18th St. San Francisco, CA 94110', :description => "One night in college I dreamt of fish at Delfina. Taking it as a message from a higher power, I went up to the city that night for dinner, and lo, there it was on the menu, a whole roasted branzino with a Meyer lemon relish, and I proceeded to have one of the most satisfying meals of my life. You see, Delfina is literally the stuff dreams are made of. Since it opened in 1998, the first yuppie outpost on a then-sleepy block on 18th St., Delfina has made the Mission hospitable to gentrified life and set the standard for Italian food in San Francisco.
You must always begin with one of Delfina's seasonal Bellinis--made with peach in the summer, pomegranate in the fall, and blood orange in the winter, it is the San Francisco aperitif par excellence. The rest is up to you (follow your dreams!), but even the carbophobes among us are strongly advised to try one of their house-made pastas, and be warned that their buttermilk panna cotta is truly sublime and will ruin you for any other. During white truffle season in November, they hold a series of dinners featuring fresh truffles flown in from Italy that elevate their exquisite pastas straight to heaven.")
r2 = Restaurant.create(:name => 'NOPA', :locu_id => 'daea756ba298a8fa8ad5', :phone => '4158648643', :url => 'http://www.nopasf.com', :address => '560 Divisadero St. San Francisco, CA 94117')
r3 = Restaurant.create(:name => 'Zuni Cafe', :locu_id => '896a8d59b03aca35fc5e', :phone => '4155522522', :url => 'http://www.zunicafe.com', :address => '1658 Market St. San Francisco, CA 94102')
r4 = Restaurant.create(:name => 'Pizzeria Delfina California St.', :locu_id => 'd73f6f881f14fc194632', :phone => '4154376800', :url => 'http://www.pizzeriadelfina.com/pacificHeights.html', :address => '2406 California St. San Francisco, CA 94115')
r5 = Restaurant.create(:name => 'Pizzeria Delfina 18th St.', :locu_id => 'fa2e03cf0cb01c634ccd', :phone => '4154401189', :url => 'http://www.pizzeriadelfina.com', :address => '3611 18th St. San Francisco, CA 94110')
r6 = Restaurant.create(:name => 'Cotogna', :locu_id => 'a8c2654cd9eeb2a3631c', :phone => '4157758508', :url => 'http://www.cotognasf.com', :address => '490 Pacific Ave., San Francisco, CA 94133')
r7 = Restaurant.create(:name => 'Kokkari', :locu_id => '667ab948001be300a865', :phone => '4159810983', :url => 'http://www.kokkari.com', :address => '200 Jackson St., San Francisco, CA 94111')
r8 = Restaurant.create(:name => 'Chez Panisse', :locu_id => 'da29040a50a9634a28a7', :phone => '5105485525', :url => 'http://www.chezpanisse.com', :address => '1517 Shattuck Ave., Berkeley, CA 94709')
r9 = Restaurant.create(:name => 'OTD Bush St', :locu_id => '43b7a12add4f723610af', :phone => '4159239575', :url => 'http://www.outthedoors.com', :address => '2232 Bush St. San Francisco, CA 94115')
r10 = Restaurant.create(:name => 'Frances', :locu_id => '93db23c47cdc569c61c4', :phone => '4156213870', :url => 'http://www.frances-sf.com', :address => '3870 17th St., San Francisco, CA 94114')