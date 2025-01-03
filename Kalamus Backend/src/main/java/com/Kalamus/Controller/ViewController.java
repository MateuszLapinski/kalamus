package com.Kalamus.Controller;

import com.Kalamus.Service.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/view")
public class ViewController {

    @Autowired
    ViewService viewService;


    @GetMapping("/allBudget")
    public List<Map<String, Object>> getAllBudgetRealisation1() {
        return viewService.getViewData("PH_TEST.dbo.v_wykonanie_budżetu");
    }

    @GetMapping("/currentallbudgets")
    public List<Map<String, Object>> getcurrentallbudgets() {
        return viewService.getCurrentBudget();
    }


    @GetMapping("/{period}")
    public List<Map<String, Object>> getBudgetForPeriod(@RequestParam String period) {
        return viewService.getBudgetForPeriod(period);
    }

    @GetMapping("/allinfo")
    public List<Map<String, Object>> getAllInfo() {
        return viewService.getViewData("[PH_TEST].[dbo].[v_sprzedaz_okres_ph_odbiorca_towar_wszystko]");
    }

    @GetMapping("/allorderinfo")
    public List<Map<String, Object>> getOrderedAllInfo(@RequestParam String period) {
        return viewService.getOrderedView(period);
    }

    @GetMapping("/raported")
    public List<Map<String,Object>> getraportedinfo(
            @RequestParam(required = false) String period,
            @RequestParam(required = false) String overGroup,
            @RequestParam(required = false) String recipent
            ){
        return viewService.getRaportedInfo(period, overGroup, recipent );
    }



    @GetMapping("/allgoodsforperiodandrecipent")
    public List<Map<String, Object>> getGoodsForPeriodAndRecipent(
            @RequestParam(required = false) String period,
            @RequestParam(required = false) String recipent){

        return viewService.getGoodsForPeriodAndRecipent(period, recipent);
    }

    @GetMapping("/invoiceforperiodrepresentative")
    public List<Map<String, Object>> getInvoiceForPeriodRepresentative(
            @RequestParam(required = false) String period,
            @RequestParam(required = false) String name
    ){
        return  viewService.getInvoicesForPeriodAndPH(period, name);
}
}
